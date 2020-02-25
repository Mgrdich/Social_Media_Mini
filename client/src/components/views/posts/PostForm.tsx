import React from 'react';
import {Button, TextField} from "@material-ui/core";
import {useForm} from "react-hook-form";
import {useServerErrorHandle} from "../../Hooks/useServerErrorHandle";
import axios from "axios";
import {URL} from "../../../config/config";
import {useDispatch} from "react-redux";
import {addPost} from "../../../action/postActions";

type FormData = {
    text: string;
}


const PostForm:React.FC = () => {
    const {handleSubmit, register, errors} = useForm<FormData>();
    const [serverError, setterError] = useServerErrorHandle();
    const dispatch = useDispatch();

    const onSubmit = function (values: any) {
        axios.post(`${URL}/posts`, values)
            .then(function (res: any) {
                dispatch(addPost(res));
            }).catch(function (e: any) {
            if (!e.response && !e.response.data )  {
                console.error("No Response is found");
            }
            setterError(e.response.data.data);
        });
    };
    return (
        <>
            <form noValidate autoComplete="off" style={{width: '100%', marginTop: 50}}
                  onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    style={{width: '100%'}}
                    id="text"
                    name="text"
                    label="Post"
                    variant="outlined"
                    color="primary"
                    inputRef={register({
                            required: "This Field is Required"
                        })}
                    rows={4}
                    error={!!errors.text || "text" in serverError}
                    helperText={(!!errors.text && errors.text.message) || ("text" in serverError && serverError.text)}
                />
                <Button type="submit" color="primary" variant="contained" size="large"
                        style={{marginTop: 10, display: "block", width: '100%'}}>Post</Button>
            </form>
        </>
    );
};

export default PostForm;