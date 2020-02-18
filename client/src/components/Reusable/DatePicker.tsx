import React from 'react';
import {KeyboardDatePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';
import {Controller} from "react-hook-form";
import DateFnsUtils from '@date-io/date-fns';

interface IDatePicker {
    format?: string;
    id: string;
    label: string;
    defaultDate: Date | null;
    control: any;
    name: string;
    disabled?: boolean;
    helperText?: string;
    error?:boolean;
}

const DatePicker: React.FC<IDatePicker> = (props) => { //TODO Replace with real date Picker
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        props.defaultDate
    );
    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Controller
                control={props.control} name={props.name}
                defaultValue={selectedDate}
                as={
                    <KeyboardDatePicker
                        id={props.id}
                        label={props.label}
                        autoOk
                        disabled={props.disabled}
                        variant="inline"
                        inputVariant="outlined"
                        format={props.format ? props.format : "MM/dd/yyyy"}
                        value={selectedDate}
                        InputAdornmentProps={{position: "start"}}
                        onChange={date => handleDateChange(date)}
                        helperText={props.helperText}
                        error={props.error}
                    />}
            />
        </MuiPickersUtilsProvider>

    );
};

export default DatePicker;