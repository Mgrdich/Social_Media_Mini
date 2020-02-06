import React from 'react';
import {Button, TextField} from "@material-ui/core";
import PasswordField from "../Reusable/PasswordField";
import {useForm} from "react-hook-form";

type FormData = {
    username:string;
    password:string;
}

const Login: React.FC = () => {
    const {handleSubmit, register, errors} = useForm<FormData>();

    const onSubmit = function (values: any) {
        console.log(values);
    };

    return (
        <>
            <h1>Login</h1>

            <div className="form">
                <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        id="username"
                        name="username"
                        label="Username"
                        variant="outlined"
                        color="primary"
                        error={!!errors.username}
                        inputRef={register({
                            required: "This Field is Required"
                        })}
                        helperText={!!errors.username && errors.username.message}
                    />
                    <PasswordField
                        label="Password"
                        name="password"
                        inputRef={register({
                            required: "This Field is Required",
                            maxLength:3
                        })}
                        error={!!errors.password}
                        helperText={!!errors.username && errors.username.message}
                    />
                    <Button color="primary" variant="contained" size="large" className="submitBtn"
                            type="submit">Login</Button>
                </form>
            </div>

        </>
    );
};

export default Login;