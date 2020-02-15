import React, {useState} from 'react';
import {Visibility, VisibilityOff} from "@material-ui/icons";
import {FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput} from "@material-ui/core";

interface IPasswordField {
    id?:string
    label: string; //TODO id ref like dropdown
    error?: boolean;
    name: string;
    inputRef?: any;
    helperText?: string | boolean;
    labelWidth?:number; //TODO do it with offset width
}

const PasswordField: React.FC<IPasswordField> = (props) => {
    const [showPassword, changeShowPassword] = useState<boolean>(false);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <FormControl variant="outlined" error={props.error}>
            <InputLabel>{props.label}</InputLabel>
            <OutlinedInput
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => changeShowPassword(!showPassword)}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <Visibility/> : <VisibilityOff/>}
                        </IconButton>
                    </InputAdornment>
                }
                inputRef={props.inputRef}
                name={props.name}
                labelWidth={props.labelWidth?props.labelWidth:70}
            />
            <FormHelperText id={props.id}>{props.helperText?props.helperText:''}</FormHelperText>
        </FormControl>
    );
};

export default PasswordField;