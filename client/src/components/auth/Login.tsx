import React, {useEffect} from 'react';
import {Button, TextField} from "@material-ui/core";
import PasswordField from "../Reusable/PasswordField";
import {useForm} from "react-hook-form";
import {useServerErrorHandle} from "../Hooks/useServerErrorHandle";
import {URL} from "../../config/config";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {loginUser} from "../../action/authActions";
import {RouteComponentProps} from "react-router";

type FormData = {
    email: string;
    password: string;
}

const Login: React.FC<RouteComponentProps> = (props) => {
    const {handleSubmit, register, errors} = useForm<FormData>();
    const [serverError, setterError] = useServerErrorHandle();
    const isAuth  = useSelector<any>(state => state.auth.isAuthenticated);
    const dispatch = useDispatch();

    const onSubmit = function (values: any) {
        axios.post(`${URL}/users/login`, values)
            .then(function (res: any) {
                dispatch(loginUser(res));
            }).catch(function (e: any) {
            if (!e.response.data) {
                console.error("No Response is found");
            }
            setterError(e.response.data);
        });
    };

    useEffect(function () {
        if(isAuth) {
            props.history.push('/dashboard');
        }
    },[isAuth,props.history]);

    return (
        <>
            <h1>Login</h1>

            <div className="form">
                <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        id="email"
                        name="email"
                        label="Email"
                        variant="outlined"
                        color="primary"
                        error={!!errors.email || "email" in serverError}
                        inputRef={register({
                            required: "This Field is Required"
                        })}
                        helperText={(!!errors.email && errors.email.message) || ("email" in serverError && serverError.email) }
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