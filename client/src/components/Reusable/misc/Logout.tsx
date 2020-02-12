import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import {AccountCircle} from "@material-ui/icons";
import {MenuItem,Menu} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {logOutUser} from "../../../action/authActions";

//TODO make a gravatar instead of the icon if it is found
const Logout:React.FC = () => {
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);


    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
            >
                <AccountCircle />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={()=>dispatch(logOutUser())}>Logout</MenuItem>
            </Menu>
        </>

    );
};

export default Logout;