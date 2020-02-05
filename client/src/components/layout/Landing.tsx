import React from 'react';
import {Button} from "@material-ui/core";

const Landing:React.FC = () => {
    return (
        <div className="landingPage">
            <h1>
                Welcome to Developer Land
            </h1>
            <div className="registerBtns">
                <Button color="primary" variant="contained" size="large">Login</Button>
                <Button color="primary" variant="outlined" size="large">Register</Button>
            </div>
        </div>
    );
};

export default Landing;