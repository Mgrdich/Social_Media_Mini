import {NextFunction, Request, Response} from "express";
import {IDocPost, IPost} from "../interfaces/models";
import {Post} from "../models/Post";
import {validationResult} from "express-validator";
import {errorCatcher, errorFormatter, errorThrower} from "../utilities/functions";
import {IComment} from "../interfaces/General";

async function createPost(req: Request, res: Response, next: NextFunction): Promise<any> {

    const errors = validationResult(req).formatWith(errorFormatter);
    if (!errors.isEmpty()) {
        try {
            errorThrower("Validation Failed", 422, errors.mapped());
        } catch (err) {
            return errorCatcher(next, err);
        }
    }

    const {text} = req.body;

    const newPost: IDocPost = new Post({
        text,
        user: req.user["_id"]
    });
    try {
        const post: IPost = await newPost.save();
        res.status(200).json(post);//TODO here should be populated
    } catch (err) {
        errorCatcher(next, err);
    }

}

async function getPosts(req: Request, res: Response, next: NextFunction): Promise<any> {

    try {
        const posts: Array<IDocPost> = await Post.find().sort({date: -1}).populate('user', ['name', 'avatar']);
        res.status(200).json(posts);
    } catch (err) {
        errorCatcher(next, err);
    }

}

async function getPost(req: Request, res: Response, next: NextFunction): Promise<any> {

    try {
        const post: IPost = await Post.findById(req.params.Id).populate('user', ['name', 'avatar']);
        res.status(200).json(post);
    } catch (err) {
        errorCatcher(next, err);
    }
}

async function deletePost(req: Request, res: Response, next: NextFunction): Promise<any> {

    try {
        const post: IDocPost = await Post.findById(req.params.Id);

        if (post.user.toString() !== req.user["_id"].toString()) {
            errorThrower("User not Authorized", 401);
        }

        const result = await post.remove();
        if (result) {
            res.status(201).json({success: true});
        }
    } catch (err) {
        errorCatcher(next, err);
    }

}

async function likePost(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
        const post: IDocPost = await Post.findById(req.params.Id);
        if (!post) {
            errorThrower("No post found", 404);
        }
        if (post.likes.filter(like => like.user.toString() === req.user["_id"].toString()).length > 0) {
            errorThrower("Already liked this picture", 422);
        }
        post.likes.unshift({user: req.user["_id"]});
        const likedPost: IDocPost = await post.save();
        res.status(201).json(likedPost);
    } catch (err) {
        errorCatcher(next, err);
    }
}

async function unLikePost(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
        const update: any = await Post.updateOne({_id: req.params.Id}, {$pull: {likes: {user: req.user["_id"]}}}, {multi: true});
        res.status(201).json({success: true});
    } catch (err) {
        errorCatcher(next, err);
    }
}

async function commentPost(req: Request, res: Response, next: NextFunction): Promise<any> {

    const errors = validationResult(req).formatWith(errorFormatter);
    if (!errors.isEmpty()) {
        try {
            errorThrower("Validation Failed", 422, errors.mapped());
        } catch (err) {
            return errorCatcher(next, err);
        }
    }

    const {text, name, avatar} = req.body;
    try {
        const post: IDocPost = await Post.findById(req.params.Id);

        if (!post) {
            errorThrower("No post found", 422);
        }

        const newComment: IComment = {
            text,
            name,
            avatar,
            user: req.user['_id']
        };

        post.comments.unshift(newComment);

        const commented: IDocPost = await post.save();
        res.status(201).json(commented);
    } catch (err) {
        errorCatcher(next, err);
    }
}

async function unCommentPost(req: Request, res: Response, next: NextFunction): Promise<any> {
    //TODO check out the cases for error handling and also the update result
    try {
        const update: any = await Post.updateOne({
            _id: req.params.Id,
        }, {$pull: {comments: {_id: req.params.comment_id, user: req.user["_id"]}}}, {multi: true});
        res.status(201).json({success: true});
    } catch (err) {
        errorCatcher(next, err);
    }

}


export {createPost, getPosts, getPost, deletePost, likePost, unLikePost, commentPost, unCommentPost};
