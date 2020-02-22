import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {getProfileByHandle} from "../../../action/profileActions";
import Loader from "../../Reusable/Loader";

type handle = {
    handle: string;
}
const Profile = () => {
    const dispatch = useDispatch();
    const param = useParams<handle>();
    const profile: any = useSelector<any>(state => state.profile);

    useEffect(function () {
        dispatch(getProfileByHandle(param.handle))
    }, [dispatch]);
    console.log(profile);
    if (!profile.loading) {
        return (
            <>
                <h1>{profile.profile.user.name} Profile</h1>
            </>
        );
    } else {
        return (<Loader size={55}/>)
    }
};

export default Profile;