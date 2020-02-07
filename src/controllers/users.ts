import {Request, Response, NextFunction} from 'express';
import {User} from '../models/User';
import {IDocUser} from "../interfaces/models";
import {validationResult} from "express-validator";
import * as jwt from 'jsonwebtoken';
import * as bcrypt from 'bcryptjs';
import * as gravatar from 'gravatar';
import {SECRET_KEY} from "../config/keys";
import {errorCatcher, errorThrower} from "../utilities/functions";


async function register(req: Request, res: Response, next: NextFunction):Promise<any> {
    const {email, name, password} = req.body;
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            errorThrower("Validation Failed", 422, errors.mapped());
        }
       const avatar = gravatar.url(email, {
            s: '200',//Size
            r: 'pg',//Rating
            d: 'm' //Default
        });
        const newUser: IDocUser = new User({email, name, avatar, password});

        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(newUser.password, salt);
        let savedUser: any = await newUser.save();
        res.status(200).json({...savedUser._doc});
    } catch (err) {
        errorCatcher(next, err);
    }
}


async function login(req: Request, res: Response, next: NextFunction):Promise<any> {
    const {email, password} = req.body;
    try {
        const user: any = await User.findOne({email});
        if (!user) {
            return res.status(422).json({email: 'no users found'})
        }

        let isMatch: boolean = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({email: 'Wrong Auth'})
        }
        const payload: any = {
            id: user.id,
            name: user.name,
            avatar: user.avatar,
        };
        const token: string = await jwt.sign(payload, SECRET_KEY, {expiresIn: 3600});
        res.status(200).json({success: true, token: `Bearer ${token}`});

    } catch (err) {

    }

}


async function currentUser(req: Request, res: Response, next: NextFunction):Promise<any> {
    res.status(200).json(req["user"]);
}


export {register, login, currentUser}