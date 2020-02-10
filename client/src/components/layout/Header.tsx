import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from "react-router-dom";
import Auth from "../HOC/Auth";


const guestLinks: JSX.Element = (
    <>
        <Link to="/Login">
            <Button color="secondary">Login</Button>
        </Link>
        <Link to="/Register">
            <Button color="secondary">Register</Button>
        </Link>
    </>
);
const authLinks: JSX.Element = (
    <>
        <div>debil</div>
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