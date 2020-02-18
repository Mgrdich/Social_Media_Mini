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
import {Button, Checkbox} from "@material-ui/core";

const Education:React.FC<RouteComponentProps> = (props) => {
    const {handleSubmit, register, errors, unregister, control} = useForm<FormData>();
    const [serverError, setterError] = useServerErrorHandle();
    const [checked, setChecked] = React.useState(false); //TODO Change the Checkbox Element with text
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
                    <DatePicker
                        format="MM/dd/yyyy"
                        id="from"
                        label="From"
                        defaultDate={new Date()}
                        name="from" control={control}
                        error={"from" in serverError}
                        helperText={("from" in serverError && serverError.from)}
                    />
                    <DatePicker
                        format="MM/dd/yyyy"
                        id="to"
                        label="To"
                        defaultDate={null}
                        name="from" control={control}
                        error={"to" in serverError}
                        helperText={("to" in serverError && serverError.to)}
                        disabled={checked}
                    />
                    <span> Current Education
                        <Checkbox
                            checked={checked}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>)=>setChecked(event.target.checked)}
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

export default Education;