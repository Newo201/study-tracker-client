import { useState, useEffect} from "react";
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone';
import DatePickerValue from "./date-picker";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// By default want to set the date range to the start of the current week and 
// the previous four weeks before that point
// var curr = new Date()
// const last = curr.getDate() - curr.getDay()
// const first = last - 28

// var endDate = curr.toLocaleDateString()
// var formattedEndDate = endDate.split("/").reverse().join("-")
// var startDate = new Date(curr.setDate(first)).toLocaleDateString()
// var formattedStartDate = startDate.split("/").reverse().join("-")

export default function DateFilter({dateRange, handleChange}) {

    // const [dateRange, setDateRange] = useState({
    //     'startDate': formattedStartDate, 
    //     'endDate': formattedEndDate
    // })

    // function handleChange(date, label) {
    //     var ausDate = (new Date(date))
    //     var dateString = ausDate.toLocaleDateString()
        
    //     var formattedDateString = (dateString.split("/").reverse().join("-"))
    //     setDateRange(prevRange => {
    //         return {...prevRange, [label]: formattedDateString}
    //     })
    // }

    // useEffect(() => {
    //     console.log(dateRange)
    // }, [dateRange])

    return (
        <div className = "container py-3">
            <div className = "row justify-content-center pb-4">
                <h2>Select Dates</h2>
            </div>
            <div className = "row justify-content-center">
                <div className = "col-4">
                    <DatePickerValue date = {dateRange['startDate']} name = 'startDate' label = "Start Date" 
                    handleChange = {handleChange}/>
                </div>
                <div className = "col-4">
                    <DatePickerValue date = {dateRange['endDate']} name = 'endDate' label = "End Date"
                    handleChange = {handleChange}/>
                </div>

            </div>
        </div>
    )
}