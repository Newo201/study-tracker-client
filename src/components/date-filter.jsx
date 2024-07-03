import DatePickerValue from "./date-picker";

export default function DateFilter({dateRange, handleChange}) {

    // MUI has a date range component but this is under their paid plan
    // I have created a component which essentially has the same functionality

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