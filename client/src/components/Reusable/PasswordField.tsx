import React, {useState} from 'react';
import {Visibility, VisibilityOff} from "@material-ui/icons";
import {FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput} from "@material-ui/core";

interface IPasswordField {
    label: string;
    error?: boolean;
    name: string;
    inputRef?: any;
    helperText?: string;
}

const PasswordField: React.FC<IPasswordField> = (props) => {
    const [showPassword, changeShowPassword] = useState<boolean>(false);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <FormControl variant="outlined">
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
                labelWidth={70}
                error={props.error}
            />
        </FormControl>
    );
};

export default PasswordField;