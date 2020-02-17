import React from 'react';
import DynamicFields from "../../Reusable/DynamicFields";
import {Button, Checkbox} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {useServerErrorHandle} from "../../Hooks/useServerErrorHandle";
import {useDynamicFields} from "../../Hooks/useDynamicFields";
import {sanitizeFormValues} from "../../../util/functions";
import axios from "axios";
import {URL} from "../../../config/config";
import {InputField} from "../../../interfaces/General";
import {InputFields,socialFields} from "../create-profile/utilFields";
// import {store} from "./store";




const EditProfile = () => {
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
                    <DynamicFields InputFields={InputFields} register={register} serverError={serverError}
                                   errors={errors} control={control}/>
                    {
                        checked ?
                            <DynamicFields InputFields={socialFields} register={register} serverError={serverError}
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

export default Index;