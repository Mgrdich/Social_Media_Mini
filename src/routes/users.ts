import * as express from "express";
import {body} from "express-validator";
import {register, login, currentUser} from "../controllers/users";
import * as passport from "passport";
import {User} from "../models/User";
import {ExtractJwt} from "passport-jwt";
import fromBodyField = ExtractJwt.fromBodyField;

const router = express.Router();


router.put("/register", [
    body("email")
        .isEmail()
        .withMessage("Enter a valid Email")
        .custom(function(value, {req})  {
            return User.findOne({email: value}).then(function(userDoc) {
                if (userDoc) {
                    return Promise.reject("Email already registered");
                }
            });
        }).normalizeEmail(),
    body("password")
        .trim()
        .isLength({min: 5}),
    body('name')
        .trim()
        .not()
        .isEmpty(),
], register);

router.post("/login", login);


//TODO convert this to a custom middleware
router.get("/current",
    passport.authenticate("jwt", {
        session: false
    }), currentUser);


export default router;