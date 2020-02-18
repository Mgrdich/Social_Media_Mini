import {NextFunction, Request, Response} from "express";
import {Profile} from "../models/Profile";
import {IDocProfile, IProfile} from "../interfaces/models";
import {errorCatcher, errorFormatter, errorThrower} from "../utilities/functions";
import {validationResult} from "express-validator";
import {IEducation, IExperience} from "../interfaces/General";

async function getProfile(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
        const profile: IProfile = await Profile.findOne({user: req.user["_id"]})
            .populate('user', ['name', 'avatar']);

        if (!profile) {
            errorThrower("There is no profile for this user", 404);
        }

        res.status(200).json(profile);
    } catch (err) {
        errorCatcher(next, err);
    }
}

async function getProfileByHandle(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
        const profByHandle: IDocProfile = await Profile.findOne({handle: req.params.handle})
            .populate('user', ['name', 'avatar']);
        if (!profByHandle) {
            errorThrower("There is no profile for this user", 404);
        }
        res.status(200).json(profByHandle);
    } catch (err) {
        errorCatcher(next, err);
    }
}

async function getProfileByUser(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
        let profByUserId: IDocProfile;
        try { //Because of the populate
            profByUserId = await Profile.findOne({user: req.params.userId})
                .populate('user', ['name', 'avatar']);
        } catch (err) {
            errorThrower("There is no profile for this user", 404); //Bubbling
        }
        res.status(200).json(profByUserId);
    } catch (err) {
        errorCatcher(next, err);
    }
}

//TODO pagination should be applied to the profiles
async function getAllProfiles(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
        const profiles: Array<IDocProfile> = await Profile.find({}).populate('user', ['name', 'avatar']);
        if (!profiles.length) {
            errorThrower("No profiles found", 422);
        }
        res.status(200).json(profiles);
    } catch (err) {
        errorCatcher(next, err);
    }

}

async function createProfile(req: Request, res: Response, next: NextFunction): Promise<any> {

    const errors = validationResult(req).formatWith(errorFormatter);
    if (!errors.isEmpty()) {
        try {
            errorThrower("Validation Failed", 422, errors.mapped());
        } catch (err) {
            errorCatcher(next, err);
        }
    }

    const {
        handle, skills, status
        , youtube, twitter, facebook, linkedin, instagram
    } = req.body;

    let profileFields: IProfile = {
        user: req.user["_id"],
        handle,
        status,
        skills: skills.split(', ')
    };
    profileFields = {...profileFields};
    // Social
    profileFields.social = {};
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
        const profile: IDocProfile = await Profile.findOneAndUpdate({user: req.user["_id"]}, {$set: profileFields}, {new: true});
        if (!profile) { //Create

            //Checking if the handle exist
            let handleProfile: IDocProfile = await Profile.findOne({handle});
            if (handleProfile) { //TODO could be moved to the validation
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

async function createExperience(req: Request, res: Response, next: NextFunction): Promise<any> {
    const errors = validationResult(req).formatWith(errorFormatter);
    if (!errors.isEmpty()) {
        try {
            errorThrower("Validation Failed", 422, errors.mapped());
        } catch (err) {
            return errorCatcher(next, err);
        }
    }
    const {
        title,
        company,
        location,
        from,
        to,
        current,
        description
    } = req.body;
    try {
        const profile: IDocProfile = await Profile.findOne({user: req.user["_id"]});
        if (!profile) {
            errorThrower("No such profile exist", 422);
        }
        const experience: IExperience = {
            title,
            company,
            location,
            from,
            to,
            current,
            description
        };
        profile.experience.unshift(experience);
        let savedProfile: IDocProfile = await profile.save();
        res.status(200).json(savedProfile);
    } catch (err) {
        errorCatcher(next, err);
    }
}

async function createEducation(req: Request, res: Response, next: NextFunction): Promise<any> {
    const errors = validationResult(req).formatWith(errorFormatter);
    if (!errors.isEmpty()) {
        try {
            errorThrower("Validation Failed", 422, errors.mapped());
        } catch (err) {
            return errorCatcher(next, err);
        }
    }
    const {
        school,
        degree,
        fieldOfStudy,
        from,
        to,
        current,
        description
    } = req.body;
    try {
        const profile: IDocProfile = await Profile.findOne({user: req.user["_id"]});
        if (!profile) {
            errorThrower("No such profile exist", 422);
        }
        const education: IEducation = {
            school,
            degree,
            fieldOfStudy,
            from,
            to,
            current,
            description
        };
        profile.education.unshift(education);
        let savedProfile: IDocProfile = await profile.save();
        res.status(200).json(savedProfile);
    } catch (err) {
        errorCatcher(next, err);
    }

}

async function deleteExperience(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
        const updatedProfile: IDocProfile = await Profile
            .updateOne({user: req.user["_id"]}, {$pull: {experience: {_id: req.params.Id}}}, {multi: true, new: true});
        if (!updatedProfile) {
            errorThrower("Profile not found", 422);
        }
        res.status(200).json(updatedProfile);
    } catch (err) {
        errorCatcher(next, err);
    }
}

async function deleteEducation(req: Request, res: Response, next: NextFunction): Promise<any> {
    try {
        const updatedProfile: IDocProfile = await Profile
            .updateOne({user: req.user["_id"]}, {$pull: {education: {_id: req.params.Id}}}, {multi: true, new: true});
        if (!updatedProfile) {
            errorThrower("Profile is not found", 422);
        }
        res.status(200).json(updatedProfile);
    } catch (err) {
        errorCatcher(next, err);
    }

}

export {
    getProfile,
    createProfile,
    getProfileByHandle,
    getProfileByUser,
    getAllProfiles,
    createExperience,
    createEducation,
    deleteExperience,
    deleteEducation
};