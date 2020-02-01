import {NextFunction, Request, Response} from "express";
import {User} from "../models/User";
import {Profile} from "../models/Profile";
import {IProfile} from "../interfaces/models";
import {errorCatcher, errorThrower} from "../utilities/functions";

async function getProfile(req: Request, res: Response, next: NextFunction): Promise<any> {
    console.log(req.user);
    try {
        const profile: IProfile = await Profile.findOne({user: req.user["_id"]});
        if (!profile) {
            errorThrower("There is no profile for this user", 404);
        }
    } catch (err) {
        errorCatcher(next, err);
    }
}

export {getProfile}