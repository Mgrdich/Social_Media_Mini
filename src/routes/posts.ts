import * as express from 'express';
import {isAuth} from "../utilities/middlewares";
import {getProfile} from "../controllers/profile";

const router = express.Router();

export default router;