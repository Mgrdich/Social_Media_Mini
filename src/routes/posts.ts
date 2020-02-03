import * as express from 'express';
import {isAuth} from "../utilities/middlewares";
import {createPost, deletePost, getPost, getPosts, likePost, unLikePost} from "../controllers/posts";
import {body} from 'express-validator';

const router = express.Router();

router.get("/",getPosts);

router.get("/:Id",getPost);

router.delete("/:Id",isAuth(),deletePost);

router.post("/like/:Id",isAuth(),likePost);

router.post('/unlike/:Id',isAuth(),unLikePost);

router.post('/', isAuth(), [
    body('text')
        .isLength({min: 10, max: 300})
], createPost);


export default router;