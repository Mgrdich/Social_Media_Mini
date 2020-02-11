import * as passport_jwt from 'passport-jwt';
import {SECRET_KEY} from "./keys";
import {User} from "../models/User";


const JwtStrategy = passport_jwt.Strategy;
const ExtractJwtStrategy = passport_jwt.ExtractJwt;

const opts: any = {};

opts.jwtFromRequest = ExtractJwtStrategy.fromAuthHeaderAsBearerToken();
opts.secretOrKey = SECRET_KEY;

export default function (passport) {
    passport.use(new JwtStrategy(opts, async function (jwt_payload, done) {
        try {
            const user = await User.findById(jwt_payload.id);
            if (user) {
                return done(null, user);
            }
            done(null, false);
        } catch (e) {
            console.log(e);
        }

    }));
}