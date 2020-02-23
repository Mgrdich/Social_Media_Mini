import React, {useCallback} from 'react';
import {Avatar, Button, Card, CardContent, CardHeader} from "@material-ui/core";
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";
import {setProfileLoading} from "../../../action/profileActions";

interface IProfileItems {
    profile: any;
}


const ProfileItems: React.FC<IProfileItems> = ({profile}) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const toProfile = useCallback(function () {
        dispatch(setProfileLoading());
        history.push(`/profile/${profile.handle}`);
    }, [history, dispatch]);

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
                <Button onClick={toProfile} color="primary" variant="outlined">See my Profile</Button>
            </CardContent>
        </Card>

    );
};

export default ProfileItems;