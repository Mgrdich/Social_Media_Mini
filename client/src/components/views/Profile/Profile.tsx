import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {getProfileByHandle} from "../../../action/profileActions";
import Loader from "../../Reusable/Loader";
import {Box, Container} from "@material-ui/core";
import ProfileAbout from "./ProfileAbout";

type handle = {
    handle: string;
}
const Profile: React.FC = () => {
    const dispatch = useDispatch();
    const param = useParams<handle>();
    const {profile, loading}: any = useSelector<any>(state => state.profile);

    useEffect(function () {
        dispatch(getProfileByHandle(param.handle))
    }, [dispatch]);

    if (!loading) { //TODO could be replace by HOC
        return (
            <>
                <h1>{profile.user.name} Profile</h1>
                <Container maxWidth="xl">
                    <Box display="flex" justifyContent="center" alignContent="center">
                        <ProfileAbout profile={profile}/>
                    </Box>
                </Container>
            </>
        );
    } else {
        return (<Loader size={55}/>)
    }
};

export default Profile;