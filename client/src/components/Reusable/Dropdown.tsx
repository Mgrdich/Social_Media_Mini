import React, {useEffect} from 'react';
import {FormControl, FormHelperText, InputLabel, MenuItem, Select} from "@material-ui/core";
import {dropdownDataType} from "../../interfaces/General";
import {Controller} from "react-hook-form";


interface IDropDown {
    id: string;
    name: string;
    label: string;
    error?: boolean;
    helperText?: string;
    data?: Array<dropdownDataType>;
    control: any;
    defaultValue?: string | number;
}

//TODO add an AJAX OPTION

const Dropdown: React.FC<IDropDown> = (props) => {
    const inputLabel = React.useRef<HTMLLabelElement>(null);
    const [labelWidth, setLabelWidth] = React.useState(0);

    useEffect(() => {
        setLabelWidth(inputLabel.current!.offsetWidth);
    }, []);

    let dropDownArray = (props.data) ? props.data : [];

    return (
        <FormControl variant="outlined" error={props.error}>
            <InputLabel ref={inputLabel} id={props.id}>
                {props.label}
            </InputLabel>
            <Controller
                control={props.control} name={props.name} defaultValue={(!!props.defaultValue) ? props.defaultValue : ''}
                as={
                    <Select
                        labelId={props.id}
                        id="demo-simple-select-outlined"
                        labelWidth={labelWidth}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {
                            dropDownArray.map((item: dropdownDataType, index) => {
                                return (
                                    <MenuItem value={item.value} key={index}>{item.placeholder}</MenuItem>
                                )
                            })
                        }
                    </Select>}

            />

            <FormHelperText id={props.id}>{props.helperText ? props.helperText : ''}</FormHelperText>
        </FormControl>
    );
};

export default Dropdown;