import React from 'react';
import {Button} from "@material-ui/core";
import {Link} from "react-router-dom";

//TODO Button Link component
const Landing: React.FC = () => {
    return (
        <div className="landingPage">
            <h1>
                Welcome to Developer Land
            </h1>
            <p>
                Create a developer profile/portfolio, share posts and get help
                from other developers
            </p>
            <div className="registerBtns">
                <Link to="/Login"><Button color="primary" variant="contained" size="large">Login</Button></Link>
                <Link to="/Register"><Button color="primary" variant="outlined" size="large">Register</Button></Link>
            </div>
        </div>
    );
};

export default Landing;