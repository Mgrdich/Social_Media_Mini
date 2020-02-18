import React from 'react';
import {RouteComponentProps} from "react-router";
import {useForm} from "react-hook-form";
import {useServerErrorHandle} from "../../Hooks/useServerErrorHandle";
import {useDynamicFields} from "../../Hooks/useDynamicFields";
import {educationInputFields} from "./utilConfig";
import {sanitizeFormValues} from "../../../util/functions";
import axios from "axios";
import {URL} from "../../../config/config";
import DynamicFields from "../../Reusable/DynamicFields";
import DatePicker from "../../Reusable/DatePicker";
import {KeyboardDatePicker} from "@material-ui/pickers";
import {Button} from "@material-ui/core";

const Education:React.FC<RouteComponentProps> = (props) => {
    const {handleSubmit, register, errors, unregister, control} = useForm<FormData>();
    const [serverError, setterError] = useServerErrorHandle();
    // const [checked, setChecked] = React.useState(false); //TODO Change the Checkbox Element with text
    useDynamicFields(educationInputFields, register, unregister);

    const onSubmit = function (values: any) {
        const sanitizedValues = sanitizeFormValues(values);

        axios.post(`${URL}/profile/education`, sanitizedValues)
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
         <h1>Add Education</h1>
         <p className="centerText">Add any education level that you are at</p>
            <div className="form">
                <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                    <DynamicFields InputFields={educationInputFields} register={register} serverError={serverError}
                                   errors={errors} control={control}/>
                  </form>
            </div>
        </>
    );
};

export default Education;