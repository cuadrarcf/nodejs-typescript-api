import { Request, Response, Router } from 'express';
// import { Customer } from '../../app/customer';
import { Utils } from '../../app/utils';
import jwt from 'jsonwebtoken';
import { ErrorManager } from '../../app/system';
import Joi from 'joi';
import { Configuration } from '../../app/config';
const router = Router();

const jwtSecret = 'bXlzdXBlcmR1cGVyc2VjcmV0';


// AUTH MIDDLEWARE
router.use((req, res, next) => {
    // login does not require jwt verification
    if (req.path === '/login') {
        // next middleware
        return next()
    }

    // get token from request header Authorization
    let token = req.headers.authorization as string;

    if(token){
        token = token.replace('Bearer ','');
    }

    // Token verification
    try {
        const decoded = jwt.verify(token, jwtSecret);
        // @ts-ignore
        req.user = decoded;
    } catch (err) {
        // Catch the JWT Expired or Invalid errors
        return res.status(401).json({ 'msg': err.message })
    }

    // next middleware
    next()
});


// LOGIN TOKEN
router.post('/login', async (req, res) => {

    try {
        const {email, password} = req.body;

        const error = validateCreate({email, password});
        if (error) {
            return ErrorManager(error, res);
        }

        const encodePass = Utils.encryptString(password, Configuration.JSON_ENCRYPT_KEY);
        // const customer = await Customer.findByEmailAndPassword(email, encodePass);
        const customer = {id:0}; // TODO use real customer

        if(!customer){
            return res.sendStatus(401);
        }

        // TODO: add verification here
        const {id} = customer;

        const token = jwt.sign({id}, jwtSecret, { expiresIn: '1d' }) // 1 day token
        res.json({ 'token': token });
    }catch (e) {
        return ErrorManager(e, res);
    }
});


// VALIDATION
function validateCreate(body: {email: string, password: string}) {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(3).max(30),
    });
    return schema.validate(body).error;
}


export default router;
