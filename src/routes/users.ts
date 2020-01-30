import * as express from 'express';
import {register} from "../controllers/users";

const router = express.Router();


router.post('/register', register);


export default router;