import React, {useState} from 'react';
import {VisibilityOff,Visibility} from "@material-ui/icons";
import {FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput} from "@material-ui/core";

const PasswordField:React.FC = (props) => {
    const [showPassword, changeShowPassword] = useState<boolean>(false);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };
    return (
        <FormControl  variant="outlined">
            <InputLabel>Password</InputLabel>
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
                labelWidth={70}
            />
        </FormControl>
    );
};

export default PasswordField;