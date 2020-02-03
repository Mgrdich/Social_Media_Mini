import * as express from 'express';
import {isAuth} from "../utilities/middlewares";
import {
    commentPost,
    createPost,
    deletePost,
    getPost,
    getPosts,
    likePost,
    unCommentPost,
    unLikePost
} from "../controllers/posts";
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

//TODO add Validation for the params
router.post('/comment/:Id',isAuth(),[
    body('text')
        .isLength({min: 10, max: 300})
],commentPost);

router.delete('/comment/:Id/:comment_id',isAuth(),unCommentPost);


export default router;