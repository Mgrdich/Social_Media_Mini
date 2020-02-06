import React from 'react';
import {Button, TextField} from "@material-ui/core";
import PasswordField from "../Reusable/PasswordField";

const Register: React.FC = () => {
    return (
        <>
            <h1>Register</h1>
            <div className="form">
                <form noValidate autoComplete="off">
                    <TextField
                        label="Name"
                        variant="outlined"
                        color="primary"
                    />
                    <TextField
                        label="email"
                        variant="outlined"
                        color="primary"
                    />
                    <PasswordField
                        label="Password"
                        name="password"
                    />
                    <PasswordField
                        label="Current Password"
                        name="current_password"
                    />
                    <Button color="primary" variant="contained" size="large" className="submitBtn">Login</Button>
                </form>
            </div>

        </>
    );
};

export default Register;