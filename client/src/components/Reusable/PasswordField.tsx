import React, {useState} from 'react';
import {VisibilityOff,Visibility} from "@material-ui/icons";
import {FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput} from "@material-ui/core";

interface IPasswordField {
    label:string;
    error?:boolean;
    name:string;
    inputRef?:any;
}
const PasswordField:React.FC<IPasswordField> = (props) => {
    const [showPassword, changeShowPassword] = useState<boolean>(false);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <FormControl  variant="outlined">
            <InputLabel>{props.label}</InputLabel>
            <OutlinedInput
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={()=>changeShowPassword(!showPassword)}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                }
                inputRef={props.inputRef}
                name={props.name}
                labelWidth={70}
            />
        </FormControl>
    );
};

export default PasswordField;