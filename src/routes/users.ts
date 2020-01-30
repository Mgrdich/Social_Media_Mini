import * as express from 'express';
import {Request, Response, NextFunction} from "express";

const router = express.Router();

router.get('/test', function (req: Request, res: Response, next: NextFunction) {

});

export default router;