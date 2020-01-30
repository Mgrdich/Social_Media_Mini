import * as express from 'express';
import {register, login} from "../controllers/users";

const router = express.Router();


router.put('/register', register);

router.post('/login', login);


export default router;