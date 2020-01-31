import * as express from "express";
import {register, login, currentUser} from "../controllers/users";
import * as passport from "passport";

const router = express.Router();


router.put('/register', register);

router.post('/login', login);


//TODO convert this to a custom middleware
router.get('/current',
    passport.authenticate('jwt', {
        session: false
    }), currentUser);


export default router;