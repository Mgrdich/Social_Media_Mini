import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {NavLink} from "react-router-dom";

const Header:React.FC = () => {
    return (
        <div className="navbarRoot">
            <AppBar position="static" className="navBar">
                <Toolbar>
                    <IconButton edge="start" color="secondary" aria-label="menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6" className="title" color="secondary">
                       <NavLink to="/">DEV CONNECTOR</NavLink>
                    </Typography>
                    <Button color="secondary">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;