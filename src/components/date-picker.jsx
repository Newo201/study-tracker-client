import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone';
import { useState } from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

dayjs.extend(utc)
dayjs.extend(timezone)

export default function DatePickerValue(props) {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={props.label ? props.label : "Date Picker"}
        value={dayjs(props.date)}
        onChange={(e) => props.handleChange(e, props.name)}
      />
    </LocalizationProvider>
  );
}
