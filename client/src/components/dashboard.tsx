import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getCurrentProfile} from "../action/profileActions";

const Dashboard:React.FC = () => {
    const dispatch = useDispatch();

    useEffect(function () {
        dispatch(getCurrentProfile());
    },[dispatch]);

    return (
        <>
            
        </>
    );
};

export default Dashboard;