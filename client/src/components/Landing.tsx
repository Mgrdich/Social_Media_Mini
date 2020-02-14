import React from 'react';
// import cupcakeSrc from "../images/cupcake.svg";
import ButtonLink from "./Reusable/ButtonLink";
import Auth from "./HOC/Auth/Auth";

const Btns:JSX.Element = (
    <div className="registerBtns">
        <ButtonLink to="/Login" color="primary"  variant="contained" size="large">Login</ButtonLink>
        <ButtonLink to="/Register" color="primary"  variant="outlined" size="large">Register</ButtonLink>
    </div>
);

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
            <Auth ElementNoAuth={Btns}/>
            <div className="image">

            </div>
        </div>
    );
};

export default Landing;