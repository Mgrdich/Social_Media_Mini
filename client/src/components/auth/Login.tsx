import React from 'react';
import {TextField} from "@material-ui/core";
import PasswordField from "../Reusable/PasswordField";

const Login: React.FC = () => {
    return (
        <>
            <h1>Login</h1>

            <div className="form">
                <form noValidate autoComplete="off">
                    <TextField
                        label="Username"
                        variant="outlined"
                        color="primary"
                    />
                    <PasswordField/>
                </form>
            </div>
            
        </>
    );
};

export default Login;