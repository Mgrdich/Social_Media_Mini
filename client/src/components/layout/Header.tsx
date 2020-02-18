import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";
import Auth from "../HOC/Auth/Auth";
import Logout from "../auth/Logout";
import ButtonLink from "../Reusable/ButtonLink";


const guestLinks: JSX.Element = (
    <>
        <ButtonLink color="secondary" to="/login">Login</ButtonLink>
        <ButtonLink color="secondary" to="/register">Register</ButtonLink>
    </>
);

const authLinks: JSX.Element = (
    <>
        <ButtonLink color="secondary" to="/dashboard">Dashboard</ButtonLink>
        <Logout/>
    </>
);

const Header: React.FC = () => {
    return (
        <div className="navbarRoot">
            <AppBar position="static" className="navBar">
                <Toolbar>
                    <IconButton edge="start" color="secondary" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>

                    <div className="flex spaceBetween flexGrow">
                        <Link to="/">
                            <Typography variant="h6" className="title" color="secondary">
                                DEV CONNECTOR
                            </Typography>
                        </Link>

                        <div>
                            <Auth ElementWithAuth={authLinks} ElementNoAuth={guestLinks}/>
                        </div>
                    </div>

                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;