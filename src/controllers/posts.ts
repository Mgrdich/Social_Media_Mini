import {NextFunction, Request, Response} from "express";
import {IDocPost, IDocProfile, IPost, IProfile} from "../interfaces/models";
import {Post} from "../models/Post";
import {validationResult} from "express-validator";
import {errorCatcher, errorThrower} from "../utilities/functions";
import {Profile} from "../models/Profile";

async function createPost(req: Request, res: Response, next: NextFunction): Promise<any> {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        try {
            errorThrower("Validation Failed", 422, errors.mapped());
        } catch (err) {
            errorCatcher(next, err);
        }
    }

    const {text, name, avatar} = req.body;

    const newPost: IDocPost = new Post({
        text,
        name,
        avatar,
        user: req.user["_id"]
    });
    try {
        const post: IPost = await newPost.save();
        res.status(200).json(post);
    } catch (err) {
        errorCatcher(next, err);
    }

}

async function getPosts(req: Request, res: Response, next: NextFunction): Promise<any> {

    try {
        const posts: Array<IDocPost> = await Post.find().sort({date: -1});
        res.status(200).json(posts);
    } catch (err) {
        errorCatcher(next, err);
    }

}

async function getPost(req: Request, res: Response, next: NextFunction): Promise<any> {

    try {
        const post: IPost = await Post.findById(req.params.Id);
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

        const result = await post.remove(); //TODO check the result later
        res.status(201).json({success: true});
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
        const update:any = await Post.updateOne({_id: req.params.Id}, {$pull:{likes:{user:req.user["_id"]}}}, {multi: true});
        console.log(update);
        res.status(201).json({success: true});
    } catch (err) {
        errorCatcher(next, err);
    }
}

export {createPost, getPosts, getPost, deletePost, likePost, unLikePost};
