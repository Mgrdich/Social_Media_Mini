import {Request, Response, NextFunction} from 'express';
import {User} from '../models/User';
import * as bcrypt from 'bcryptjs';
import * as gravatar from 'gravatar';
import {IUser} from "../interfaces/models";

async function register(req: Request, res: Response, next: NextFunction) {
    const {email, name, password} = req.body;
    try {
        const user = await User.findOne({email});
        if (user) {
            return res.status(400).json({email: 'Email Already Exist'})
        }
        const avatar = gravatar.url(email, {
            s: '200',//Size
            r: 'pg',//Rating
            d: 'm' //Default
        });
        const newUser:any = new User({email, name, avatar, password});

        const salt = await bcrypt.genSalt(10);
        newUser.password = await bcrypt.hash(newUser.password, salt);
        await newUser.save();
    } catch (err) {
        console.log(err);
    }
}

export {register}