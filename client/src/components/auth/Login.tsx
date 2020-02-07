import React from 'react';
import {Button, TextField} from "@material-ui/core";
import PasswordField from "../Reusable/PasswordField";
import {useForm} from "react-hook-form";
import axios from "axios";
import {URL} from "../../config/config";

type FormData = {
    email: string;
    password: string;
}

const Login: React.FC = () => {
    const {handleSubmit, register, errors} = useForm<FormData>();

    const onSubmit = function (values: any) {
        axios.post(`${URL}/users/login`, values)
            .then(function (res: any) {
                console.log(res.data);
            }).catch(function (e: Error) {
            console.log(e);
        });
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
                        error={!!errors.email}
                        inputRef={register({
                            required: "This Field is Required"
                        })}
                        helperText={!!errors.email && errors.email.message}
                    />
                    <PasswordField
                        label="Password"
                        id="password"
                        name="password"
                        inputRef={register({
                            required: "This Field is Required",
                        })}
                        error={!!errors.password}
                        helperText={!!errors.password && errors.password.message}
                    />
                    <Button color="primary" variant="contained" size="large" className="submitBtn"
                            type="submit">Login</Button>
                </form>
            </div>

        </>
    );
};

export default Login;