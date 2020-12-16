import { Request, Response, Router } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { ParamsDictionary } from 'express-serve-static-core';

import { paramMissingError } from '../../app/shared/constants';
import { ParseBodyRequest, ParseResponse } from './interfaces';

// Init shared
const router = Router();


/******************************************************************************
 *                      Get All - "GET /api/v1/parse"
 ******************************************************************************/

router.get('/', async (req: Request, res: Response) => {
    return res.status(OK).json({version:2.0});
});


/******************************************************************************
 *                       Add One - "POST /api/v1/parse"
 ******************************************************************************/

router.post('/', async (req: Request, res: Response) => {

    const { data } = req.body as ParseBodyRequest;

    if (!data) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }

    const result: ParseResponse = {
        statusCode: 200,
        data: {
            firstName: 'JOHN',
            lastName: 'MICHAEL',
            clientId: '999-4567'
        }
    }

    return res.status(CREATED).json(result);
});


/******************************************************************************
 *                       Update - "PUT /api/v1/parse:id"
 ******************************************************************************/

router.patch('/:id', async (req: Request, res: Response) => {
    const { user } = req.body;
    if (!user) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    user.id = Number(user.id);
    return res.status(OK).end();
});


/******************************************************************************
 *                    Delete - "DELETE /api/v1/parse/:id"
 ******************************************************************************/

router.delete('/delete/:id', async (req: Request, res: Response) => {
    const { id } = req.params as ParamsDictionary;
    return res.status(OK).end();
});


/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
