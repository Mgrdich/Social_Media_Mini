import React from 'react';
import ButtonLink from "../../Reusable/ButtonLink";

const ProfileActions = () => {

    return (
        <>
            <ButtonLink to="/edit-profile" color="primary" variant="contained" size="large" style={{marginRight:10}}>
                 Edit Profile
            </ButtonLink>
            <ButtonLink to="/add-experience" color="primary" variant="contained" size="large" style={{marginRight:10}}>

                Add Experience
            </ButtonLink>
            <ButtonLink to="/add-education" color="primary" variant="contained" size="large">
                Add Education
            </ButtonLink>
        </>
    );
};

export default ProfileActions;