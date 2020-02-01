import {NextFunction, Request, Response} from "express";
import {User} from "../models/User";
import {Profile} from "../models/Profile";
import {IDocProfile, IProfile} from "../interfaces/models";
import {errorCatcher, errorThrower} from "../utilities/functions";

async function getProfile(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
        const profile: IProfile = await Profile.findOne({user: req.user["_id"]});
        if (!profile) {
            errorThrower("There is no profile for this user", 404);
        }
        res.status(200).json(profile);
    } catch (err) {
        errorCatcher(next, err);
    }
}

async function createProfile(req: Request, res: Response, next: NextFunction): Promise<any> {

    const {
        handle, skills, company, website, location, bio, status, githubUserName
        , youtube, twitter, facebook, linkedin, instagram
    } = req.body;

    const profileFields: IProfile = {
        user: req.user["_id"],
        handle,
        status,
        skills: skills.split(', ')
    };
    if (company) {
        profileFields.company = company;
    }
    if (website) {
        profileFields.website = website;
    }
    if (location) {
        profileFields.location = location;
    }
    if (bio) {
        profileFields.bio = bio;
    }
    if (githubUserName) {
        profileFields.githubUserName = githubUserName;
    }

    // Social
    if (youtube) {
        profileFields.social.youtube = youtube;
    }
    if (twitter) {
        profileFields.social.twitter = twitter;
    }
    if (facebook) {
        profileFields.social.facebook = facebook;
    }
    if (linkedin) {
        profileFields.social.linkedin = linkedin;
    }
    if (instagram) {
        profileFields.social.instagram = instagram;
    }

    try {
        // const profile:IDocProfile = await Profile.findOne({user:req.user["_id"]});
        const profile: IDocProfile = await Profile.findOneAndUpdate({user: req.user["_id"]}, {$set: profileFields});

        if (!profile) { //Create

            //Checking if the handle exist
            let handleProfile: IDocProfile = await Profile.findOne({handle});
            if (handleProfile) {
                errorThrower("Handle does exist", 422);
            }

            let newProfile: IDocProfile = await new Profile(profileFields).save();
            return res.status(200).json(newProfile);
        }

        res.status(200).json(profile);

    } catch (err) {
        errorCatcher(next, err);
    }

}

export {getProfile, createProfile}