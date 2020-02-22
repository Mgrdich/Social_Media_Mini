import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProfiles} from "../../../action/profileActions";
import ProfileItems from "./ProfileItems";
import {Grid} from "@material-ui/core";

const Profiles: React.FC = () => {
    const profiles: any = useSelector<any>(state => state.profile.profiles);
    const dispatch = useDispatch();

    useEffect(function () {
        dispatch(getProfiles());
    }, [dispatch]);


    return (
        <Grid container spacing={3} style={{marginTop: 62}}>
            {
                (profiles.length) ? profiles.map((item: any, index: number) => {
                    return <Grid item xs={12} sm={6} md={4} lg={3}><ProfileItems profile={item}/></Grid>
                }) : <h2>No Profiles yet</h2>
            }
        </Grid>
    );
};

export default React.memo(Profiles);
