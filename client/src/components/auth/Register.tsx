import React from 'react';
import {Button, TextField} from "@material-ui/core";
import PasswordField from "../Reusable/PasswordField";
import {useForm} from "react-hook-form";
type FormData = {
    email:string;
    password:string;
    name:string;
    current_password:string;
}
const Register: React.FC = () => {
    const {handleSubmit, register, errors} = useForm<FormData>();

    const onSubmit = function (values: any) {
        console.log(values);
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
                        error={!!errors.name}
                        inputRef={register({
                            required: "This Field is Required"
                        })}
                        helperText={!!errors.name && errors.name.message}
                    />
                    <TextField
                        label="Email"
                        name="email"
                        variant="outlined"
                        error={!!errors.email}
                        inputRef={register({
                            required: "This Field is Required"
                        })}
                        helperText={!!errors.email && errors.email.message}

                    />
                    <PasswordField
                        label="Password"
                        name="password"
                        inputRef={register({
                            required: "This Field is Required",
                        })}
                        error={!!errors.password}
                        helperText={!!errors.password && errors.password.message}
                    />
                    <PasswordField
                        label="Current Password"
                        labelWidth={130}
                        name="current_password"
                        inputRef={register({
                            required: "This Field is Required",
                        })}
                        error={!!errors.current_password}
                        helperText={!!errors.current_password && errors.current_password.message}
                    />
                    <Button color="primary" variant="contained" size="large" className="submitBtn" type="submit">Login</Button>
                </form>
            </div>

        </>
    );
};

export default Register;