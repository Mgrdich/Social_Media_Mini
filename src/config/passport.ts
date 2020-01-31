import * as passport_jwt from 'passport-jwt';
import * as mongoose from 'mongoose';
import {SECRET_KEY} from "./keys";
import {User} from "../models/User";


const JwtStrategy = passport_jwt.Strategy;
const ExtractJwtStrategy = passport_jwt.ExtractJwt;

const opts: any = {};

opts.jwtFromRequest = ExtractJwtStrategy.fromAuthHeaderAsBearerToken();
opts.secretOrKey = SECRET_KEY;

export default (passport) => {
    passport.use(new JwtStrategy(opts,(jwt_payload,done)=>{
        console.log(jwt_payload);
    }));
}