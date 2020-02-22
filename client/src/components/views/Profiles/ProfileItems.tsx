import React from 'react';
import {Avatar, Card, CardContent, CardHeader} from "@material-ui/core";
import ButtonLink from "../../Reusable/ButtonLink";

interface IProfileItems {
    profile: any;
}

const ProfileItems: React.FC<IProfileItems> = ({profile}) => {

    return (
        <Card>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe">
                        {profile.user.name[0]}
                    </Avatar>
                }
                title={profile.user.name}
                subheader={(profile.user.status) ? profile.user.status : ''}
            />
            <CardContent>
                <ButtonLink to={`/profile/${profile.user._id}`} color="primary">See my Profile</ButtonLink>
            </CardContent>
        </Card>

    );
};

export default ProfileItems;