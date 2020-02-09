import React from 'react';
import {Button, TextField} from "@material-ui/core";
import PasswordField from "../Reusable/PasswordField";
import {useForm} from "react-hook-form";
import axios from 'axios';
import {URL} from "../../config/config";
import {useServerErrorHandle} from "../Hooks/useServerErrorHandle";
import {RouteComponentProps} from "react-router";

type FormData = {
    email: string;
    password: string;
    name: string;
    current_password: string;
}

const Register: React.FC<RouteComponentProps>= (props) => {
    const {handleSubmit, register, errors} = useForm<FormData>();
    const [serverError, setterError] = useServerErrorHandle();


    const onSubmit = function (values: any) {
        axios.put(`${URL}/users/register`, values)
            .then(function (res) {
                props.history.push('/login');
            }).catch(function (e: any) {
            if (!e.response.data) {
                console.error("No Response is found");
            }
            setterError(e.response.data.data);
        })
    };


    return (
        <>
            <h1>Register</h1>
            <div className="form">
                <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        id="name"
                        label="Name"
                        name="name"
                        variant="outlined"
                        error={!!errors.name || "name" in serverError}
                        inputRef={register({
                            required: "This Field is Required"
                        })}
                        helperText={(!!errors.name && errors.name.message) || ("name" in serverError && serverError.name)}
                    />
                    <TextField
                        label="Email"
                        name="email"
                        variant="outlined"
                        error={!!errors.email || "email" in serverError}
                        inputRef={register({
                            required: "This Field is Required"
                        })}
                        helperText={(!!errors.email && errors.email.message) || ("email" in serverError && serverError.email)}

                    />
                    <PasswordField
                        label="Password"
                        name="password"
                        inputRef={register({
                            required: "This Field is Required",
                        })}
                        error={!!errors.password || "password" in serverError}
                        helperText={(!!errors.password && errors.password.message) || ("password" in serverError && serverError.password)}
                    />
                    <PasswordField
                        label="Current Password"
                        labelWidth={130}
                        name="current_password"
                        inputRef={register({
                            required: "This Field is Required",
                        })}
                        error={!!errors.current_password || "current_password" in serverError}
                        helperText={(!!errors.current_password && errors.current_password.message) || ("current_password" in serverError && serverError.current_password)}
                    />
                    <Button color="primary" variant="contained" size="large" className="submitBtn"
                            type="submit">Register</Button>
                </form>
            </div>

        </>
    );
};

export default Register;