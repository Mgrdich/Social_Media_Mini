import React from 'react';
import {Button, TextField} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {useServerErrorHandle} from "../../Hooks/useServerErrorHandle";
import axios from "axios";
import {URL} from "../../../config/config";
import {loginUser} from "../../../action/authActions";
import {useDispatch} from "react-redux";
import {dropdownDataType, InputField} from "../../../interfaces/General";
import Dropdown from "../../Reusable/Dropdown";

type FormData = {
    [key: string]: string;
    status: string;
}
const InputFields: Array<InputField> = [
    {
        name: 'handle',
        placeholder: 'Profile Handle'
    },
    {
        name: 'status',
        type: "select",
        placeholder: 'Status'
    },
    {
        name: 'company',
        placeholder: 'company'
    },
    {
        name: 'website',
        placeholder: 'website'
    },
    {
        name: 'location',
        placeholder: 'location'
    },
    {
        name: 'skills',
        placeholder: 'skills'
    },
    {
        name: 'githubusername',
        placeholder: 'githubusername'
    },
    {
        name: "bio",
        type: "textArea",
        placeholder: 'bio'
    }
];

const status: Array<dropdownDataType> = [
    {placeholder: 'Select Professional Status', value: 0},
    {placeholder: 'Developer', value: 'Developer'},
    {placeholder: 'Junior Developer', value: 'Junior Developer'},
    {placeholder: 'Senior Developer', value: 'Senior Developer'},
    {placeholder: 'Manager', value: 'Manager'},
    {placeholder: 'Student or Learning', value: 'Student or Learning'},
    {placeholder: 'Instructor or Teacher', value: 'Instructor or Teacher'},
    {placeholder: 'Intern', value: 'Intern'},
    {placeholder: 'Other', value: 'Other'}
];


const CreateProfile: React.FC = () => {
    const {handleSubmit, register, errors} = useForm<any>();
    const [serverError, setterError] = useServerErrorHandle();
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


    return (
        <>
            <h1>Create Your Profile</h1>
            <div className="form">
                <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    {
                        InputFields.map((item: InputField, index) => {
                            let errorName: any = errors[item.name];
                            if (item.type === 'select') {
                                return (
                                    <Dropdown id={item.name} label={item.placeholder} name={item.name} key={index} data={status}/>
                                )
                            } else {
                                return (
                                    <TextField
                                        key={index}
                                        id={item.name}
                                        name={item.name}
                                        label={item.placeholder}
                                        variant="outlined"
                                        color="primary"
                                        error={!!errorName || `${item.name}` in serverError}
                                        helperText={(!!errorName && errorName.message || (`${item.name}` in serverError && serverError[item.name]))}
                                    />
                                )
                            }
                        })
                    }
                    <Button color="primary" variant="contained" size="large" className="submitBtn"
                            type="submit">OK</Button>
                </form>
            </div>
        </>
    );
};

export default CreateProfile;