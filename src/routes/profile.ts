import * as express from 'express';
import {Request, Response, NextFunction} from "express";
import {isAuth} from "../utilities/middlewares";
import {createProfile, getProfile} from "../controllers/profile";

const router = express.Router();

router.get('/',isAuth(),getProfile);

router.post('/',isAuth(),createProfile);

export default router;