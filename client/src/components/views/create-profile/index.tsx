import React from 'react';
import {Button, TextField} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {useServerErrorHandle} from "../../Hooks/useServerErrorHandle";
import {dropdownDataType, InputField} from "../../../interfaces/General";
import Dropdown from "../../Reusable/Dropdown";
import {RouteComponentProps} from "react-router";
import {useDynamicFields} from "../../Hooks/useDynamicFields";
import axios from "axios";

type FormData = {
    [key: string]: string;
}
const InputFields: Array<InputField> = [
    {
        name: 'handle',
        placeholder: 'Profile Handle',
        required: true
    },
    {
        name: 'status',
        type: "select",
        placeholder: 'Status',
        required: true
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
        placeholder: 'skills',
        required: true
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


const CreateProfile: React.FC<RouteComponentProps> = (props) => {
    const {handleSubmit, register, errors, unregister, control} = useForm<FormData>();
    const [serverError, setterError] = useServerErrorHandle();
    useDynamicFields(InputFields, register, unregister);

    const onSubmit = function (values: any) {
        axios.post(`${URL}/profile`, values)
            .then(function (res: any) {
                props.history.push('/');//TODO change it later
            }).catch(function (e: any) {
            if (!e.response.data) {
                console.error("No Response is found");
            }
            setterError(e.response.data);
        });
    };

    //TODO make the group of inputs into a function or a component

    return (
        <>
            <h1>Create Your Profile</h1>
            <div className="form">
                <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    {
                        InputFields.map((item: InputField, index) => {
                            let errorName: any = errors[item.name];
                            //TODO register equality should be all over here for more custom checking
                            if (item.type === 'select') {
                                return (
                                    <Dropdown
                                        id={item.name}
                                        label={item.placeholder}
                                        name={item.name}
                                        key={index}
                                        data={status}
                                        control={control}
                                        error={!!errorName || `${item.name}` in serverError}
                                        helperText={(!!errorName && errorName.message || (`${item.name}` in serverError && serverError[item.name]))}
                                    />
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
                                        inputRef={(!item.required) ? register : register({
                                            required: "This Field is Required"
                                        })}
                                        rows={(item.type === 'textArea') ? 4 : 1}
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