import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getCurrentProfile} from "../action/profileActions";
import {Container} from "@material-ui/core";
import ButtonLink from "./Reusable/ButtonLink";
import Loader from "./Reusable/Loader";

const Dashboard: React.FC = () => {
    const dispatch = useDispatch();
    const profile: any = useSelector<any>(state => state.profile.profile);
    const isLoading: unknown = useSelector<any>(state => state.profile.loading);
    const user:any = useSelector<any>(state => state.auth.user);
    let dashboardContent: JSX.Element;

    useEffect(function () {
        dispatch(getCurrentProfile());
    }, [dispatch]);

    if (isLoading || profile === null) {
        dashboardContent = <Loader size={55}/>
    } else {
        if (Object.keys(profile).length > 1) {
            dashboardContent = <h4>TODO: DISPLAY PROFILE</h4>;
        } else {
            dashboardContent = (
                <div>
                    <p className="lead text-muted">Welcome {user.name}</p>
                    <p>You have not yet setup a profile, please add some info</p>
                    <ButtonLink color="primary" variant="contained" size="large" to='/create-profile'>Create Link</ButtonLink>
                </div>
            )
        }
    }

    return (
        <>
            <h1>Dashboard</h1>
            <Container>
                {dashboardContent}
            </Container>
        </>
    );
};

export default Dashboard;