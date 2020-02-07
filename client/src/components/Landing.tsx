import React from 'react';
import cupcakeSrc from "../images/cupcake.svg";
import ButtonLink from "./Reusable/ButtonLink";

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
                <ButtonLink to="/Login" color="primary"  variant="contained" size="large">Login</ButtonLink>
                <ButtonLink to="/Register" color="primary"  variant="outlined" size="large">Register</ButtonLink>
            </div>
            <div className="image">
                <img src={cupcakeSrc} alt=""/>
            </div>
        </div>
    );
};

export default Landing;