import React, {useEffect} from 'react';
import {FormControl, FormHelperText, InputLabel, MenuItem, Select} from "@material-ui/core";
import {dropdownDataType} from "../../interfaces/General";


interface IDropDown {
    id: string;
    name:string;
    label: string;
    error?: boolean;
    helperText?: string;
    data?: Array<dropdownDataType>;
}

//TODO add an AJAX OPTION

const Dropdown: React.FC<IDropDown> = (props) => {
    const [value, setValue] = React.useState('');

    const inputLabel = React.useRef<HTMLLabelElement>(null);
    const [labelWidth, setLabelWidth] = React.useState(0);

    useEffect(() => {
        setLabelWidth(inputLabel.current!.offsetWidth);
    }, []);

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setValue(event.target.value as string);
    };
    let dropDownArray = (props.data) ? props.data : [];

    return (
        <FormControl variant="outlined" error={props.error}>
            <InputLabel ref={inputLabel} id={props.id}>
                {props.label}
            </InputLabel>
            <Select
                labelId={props.id}
                id="demo-simple-select-outlined"
                name={props.name}
                value={value}
                onChange={handleChange}
                labelWidth={labelWidth}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {
                    dropDownArray.map((item: dropdownDataType, index) => {
                        return (
                            <MenuItem value={item.value}>{item.placeholder}</MenuItem>
                        )
                    })
                }
            </Select>
            <FormHelperText id={props.id}>{props.helperText ? props.helperText : ''}</FormHelperText>
        </FormControl>
    );
};

export default Dropdown;