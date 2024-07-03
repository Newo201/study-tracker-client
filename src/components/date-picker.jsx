import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

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
