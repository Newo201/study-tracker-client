import { useState } from "react";
import DatePickerValue from "./date-picker";
// By default want to set the date range to the start of the current week and 
// the previous four weeks before that point
var curr = new Date()
var last = curr.getDate() - curr.getDay()
var first = last - 28

var startDate = new Date(curr.setDate(first)).toISOString().split('T')[0]
var endDate = new Date(curr.setDate(last)).toISOString().split('T')[0]

export default function DateFilter() {

    const [dateRange, setDateRange] = useState({'startDate': startDate, 'endDate': endDate})

    return (
        <div className = "container py-3">
            <div className = "row justify-content-center pb-4">
                <h2>Select Dates</h2>
            </div>
            <div className = "row justify-content-center">
                <div className = "col-4">
                    <DatePickerValue date = {dateRange['startDate']} label = "Start Date"/>
                </div>
                <div className = "col-4">
                    <DatePickerValue date = {dateRange['endDate']} label = "End Date"/>
                </div>

            </div>
        </div>
    )
}