import { Router } from 'express';
import CorsRouter from '../modules/access/cors';
import AccessRouter from '../modules/access';
import Parse from '../modules/parse/parseV1';
// import CustomerRouter from '../modules/customer';

// Init router and path
const router = Router();


// CORS
router.use(CorsRouter)


// PUBLIC
router.use('/parse', Parse);


// PRIVATE
router.use(AccessRouter);
// router.use('/customer', CustomerRouter);


export default router;
