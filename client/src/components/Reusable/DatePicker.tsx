import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {KeyboardDatePicker, MuiPickersUtilsProvider,} from '@material-ui/pickers';

interface IDatePicker {
    format?: string;
    id: string;
    label: string;
}

const DatePicker: React.FC<IDatePicker> = (props) => {
    const [selectedDate, setSelectedDate] = React.useState<Date | null>(
        new Date(),
    );
    const handleDateChange = (date: Date | null) => {
        setSelectedDate(date);
    };
    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                id={props.id}
                label={props.label}
                autoOk
                variant="inline"
                inputVariant="outlined"
                format={props.format ? props.format : "MM/dd/yyyy"}
                value={selectedDate}
                InputAdornmentProps={{position: "start"}}
                onChange={date => handleDateChange(date)}
            />
        </MuiPickersUtilsProvider>
    );
};

export default DatePicker;