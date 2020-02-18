import * as express from 'express';
import {body,param} from "express-validator";
import {isAuth} from "../utilities/middlewares";
import {
    createProfile,
    getAllProfiles,
    getProfile,
    getProfileByHandle,
    getProfileByUser,
    createExperience,
    createEducation, deleteExperience, deleteEducation
} from "../controllers/profile";

const router = express.Router();

router.get('/', isAuth(), getProfile);

router.get('/handle/:handle', getProfileByHandle);

router.get('/user/:userId',getProfileByUser);

router.get('/all', getAllProfiles);

router.post('/', isAuth(), [
    body(['skills', 'status']) //TODO: add the other fields and seperate skills with special validation
        .notEmpty()
        .trim(),
    body('handle')
        .isString()
        .trim()
        .isLength({min: 2, max: 40}),
    body(['website', 'youtube', 'facebook', 'twitter', 'linkedin', 'instagram'])
        .optional()
        .isURL(),
], createProfile);

router.post('/experience', isAuth(), [
    body(['title', 'company','from'])
        .notEmpty(),
    body('from','Invalid Date')
        .isAfter(),
    body('to','Invalid Date') //TODO should be written after from
        .optional()
        .isAfter()
], createExperience);

router.post('/education', isAuth(), [
    body(['school', 'degree', 'fieldOfStudy', 'from'])
        .notEmpty(),
    body('from','Invalid Date')
        .isAfter(),
    body('to','Invalid Date')
        .optional()
        .isAfter()
], createEducation);

router.delete('/experience/:Id', isAuth(), deleteExperience);

router.delete('/education/:Id', isAuth(), deleteEducation);


export default router;