import * as express from 'express';
import {body} from "express-validator";
import {isAuth} from "../utilities/middlewares";
import {createProfile, getProfile, getProfileByHandle, getProfileByUser} from "../controllers/profile";

const router = express.Router();

router.get('/', isAuth(), getProfile);

router.get('/handle/:handle',getProfileByHandle);

router.get('/user/:userId',getProfileByUser);

router.post('/', [
    body(['skills','status']) //TODO: add the other fields and seperate skills with special validation
        .notEmpty()
        .trim(),
    body('handle')
        .isString()
        .trim()
        .isLength({min: 2, max: 40}),
    body(['website','youtube','facebook','twitter','linkedin','instagram'])
        .optional()
        .isURL(),
], isAuth(), createProfile);



export default router;