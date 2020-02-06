import React from 'react';
import {TextField} from "@material-ui/core";
import PasswordField from "../Reusable/PasswordField";

const Register: React.FC = () => {
    return (
        <>
            <h1>Register</h1>
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

export default Register;