import cookieParser from 'cookie-parser';
import express, { NextFunction, Request, Response } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import { BAD_REQUEST } from 'http-status-codes';
import logger from './app/shared/Logger';
// import 'express-async-errors';

import routerV1 from './router/routerV1';
import routerV2 from './router/routerV2';


// Init express
const app = express();


/************************************************************************************
 *                              Set basic express settings
 ***********************************************************************************/

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Security
if (process.env.NODE_ENV === 'production') {
    app.use(helmet());
}

// Home
app.get('/', (req, res) => {
    res.send(`
        <div align="center">
            <br>
            <h4>Endpoints</h4>
            <p>POST: /api/v1/parse</p>
            <p>POST: /api/v2/parse</p>
        </div>
    `);
});


// APIs Versions
app.use('/api/v1', routerV1);

app.use('/api/v2', routerV2);


// Print API errors
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error(err.message, err);
    return res.status(BAD_REQUEST).json({
        error: err.message,
    });
});



/************************************************************************************
 *                              Serve front-end content
 ***********************************************************************************/

// Export express instance
export default app;
