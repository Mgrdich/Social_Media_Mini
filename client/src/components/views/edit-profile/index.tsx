import React, {useEffect, useState} from 'react';
import DynamicFields from "../../Reusable/DynamicFields";
import {Button, Checkbox} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {useServerErrorHandle} from "../../Hooks/useServerErrorHandle";
import {useDynamicFields} from "../../Hooks/useDynamicFields";
import {InputFields, socialFields} from "../create-profile/utilFields";
import {useSelector} from "react-redux";
import {InputField} from "../../../interfaces/General";
import {RouteComponentProps} from "react-router";
import {sanitizeFormValues} from "../../../util/functions";
import axios from "axios";


const EditProfile: React.FC<RouteComponentProps> = (props) => { //TODO should request the profile if none found
    const profile: any = useSelector<any>(state => state.profile.profile);
    const [editedInputFields, setEditedInputFields] = useState<Array<any>>([]);
    const [editedSocialFields, setEditedSocialFields] = useState<Array<any>>([]);
    useEffect(function () {
        if (editedInputFields.length === 0) {
            let editInpF: Array<InputField> = InputFields.map((item: InputField, index: number) => {
                let obj: InputField = {...item};
                if (profile[item.name]) {
                    obj.default = profile[item.name];
                    return obj;
                }
                return obj;
            });
            setEditedInputFields(editInpF);
        }
        if (editedSocialFields.length === 0) {
            let editSocF: Array<InputField> = socialFields.map((item: InputField, index: number) => {
                let obj: InputField = {...item};
                if (profile.social && profile.social[item.name]) {
                    obj.default = profile.social[item.name];
                    return obj;
                }
                return obj;
            });
            setEditedSocialFields(editSocF);
        }
    }, [editedSocialFields, editedInputFields, profile]);


    const {handleSubmit, register, errors, unregister, control} = useForm<FormData>();
    const [serverError, setterError] = useServerErrorHandle();
    const [checked, setChecked] = React.useState(false); //TODO Change the Checkbox Element with text
    useDynamicFields(InputFields, register, unregister);

    const handleChange = function (event: React.ChangeEvent<HTMLInputElement>) {
        setChecked(event.target.checked);
    };

    const onSubmit = function (values: any) {
        const sanitizedValues = sanitizeFormValues(values);

        axios.post(`${URL}/profile`, sanitizedValues)
            .then(function (res: any) {
                props.history.push('/dashboard');
            }).catch(function (e: any) {
            if (!e.response.data) {
                console.error("No Response is found");
            }
            setterError(e.response.data.data);
        });
    };

    return (
        <>
            <h1>Edit Your Profile</h1>
            <div className="form">
                <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <DynamicFields InputFields={editedInputFields} register={register} serverError={serverError}
                                   errors={errors} control={control}/>
                    {
                        checked ?
                            <DynamicFields InputFields={editedSocialFields} register={register}
                                           serverError={serverError}
                                           errors={errors} control={control}/> : null
                    }
                    <span> Add Socials
                        <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            color="primary"
                            inputProps={{'aria-label': 'primary checkbox'}}
                        />
                    </span>
                    <Button color="primary" variant="contained" size="large" className="submitBtn"
                            type="submit">OK</Button>
                </form>
            </div>
        </>
    );
};

export default EditProfile;