import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteEducation, deleteExperience, getCurrentProfile} from "../../../action/profileActions";
import {Container} from "@material-ui/core";
import ButtonLink from "../../Reusable/ButtonLink";
import Loader from "../../Reusable/Loader";
import {Link} from "react-router-dom";
import ProfileActions from "./ProfileActions";
import DashboardTable from "./dashboardTable";
import DeleteIcon from '@material-ui/icons/Delete';

const DeleteIcons: JSX.Element = <DeleteIcon color="primary"/>;

const Index: React.FC = () => {
    const dispatch = useDispatch();
    const profile: any = useSelector<any>(state => state.profile.profile);
    const isLoading: unknown = useSelector<any>(state => state.profile.loading);
    const user: any = useSelector<any>(state => state.auth.user);
    let dashboardContent: JSX.Element;

    useEffect(function () {
        dispatch(getCurrentProfile());
    }, [dispatch]);

    const deleteMyEducation = useCallback(function (id: string) {
        dispatch(deleteEducation(id));
    }, [dispatch]);

    const deleteMyExperience = useCallback(function (id: string) {
        dispatch(deleteExperience(id));
    }, [dispatch]);


    if (isLoading || profile === null) {
        dashboardContent = <Loader size={55}/>
    } else {
        if (Object.keys(profile).length > 0) {
            dashboardContent = (
                <>
                    <p>
                        Welcome <Link to={`/profile/${profile.handle}`}>{user.name}</Link>
                    </p>
                    <ProfileActions/>
                    <DashboardTable
                        thead={['School', 'Degree', 'Years', '']}
                        tbody={['school', 'degree', 'from', DeleteIcons]}
                        data={profile.education}
                        style={{marginTop: 10}}
                        actionHandler={deleteMyEducation}
                    />

                    <DashboardTable
                        thead={['Title', 'Company', 'Date', '']}
                        tbody={['title', 'company', 'from', DeleteIcons]}
                        data={profile.experience}
                        style={{marginTop: 10}}
                        actionHandler={deleteMyExperience}
                    />

                </>
            );
        } else {
            dashboardContent = (
                <div>
                    <p className="lead text-muted">Welcome {user.name}</p>
                    <p>You have not yet setup a profile, please add some info</p>
                    <ButtonLink color="primary" variant="contained" size="large" to='/create-profile'>Create
                        Link</ButtonLink>
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

export default Index;