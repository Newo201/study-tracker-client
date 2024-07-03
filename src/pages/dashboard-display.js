import { useState} from "react";
import DateFilter from "../components/date-filter";
import Dashboard from "../components/dashboard";
import useUpdateDashboard from "../hooks/useUpdateDashboard";

// By default want to set the date range to the start of the current week and 
// the previous four weeks before that point
var curr = new Date()
const last = curr.getDate() - curr.getDay()
const first = last - 28

var endDate = curr.toLocaleDateString()
var formattedEndDate = endDate.split("/").reverse().join("-")
var startDate = new Date(curr.setDate(first)).toLocaleDateString()
var formattedStartDate = startDate.split("/").reverse().join("-")


export default function DashboardDisplay() {

    const [dateRange, setDateRange] = useState({
        'startDate': formattedStartDate, 
        'endDate': formattedEndDate
    })

    function handleChange(date, label) {
        var ausDate = (new Date(date))
        var dateString = ausDate.toLocaleDateString()
        
        var formattedDateString = (dateString.split("/").reverse().join("-"))
        setDateRange(prevRange => {
            return {...prevRange, [label]: formattedDateString}
        })
    }

    const {loading, error, allChartData} = useUpdateDashboard({
        start_date: dateRange['startDate'], 
        end_date: dateRange['endDate']}, 
        [dateRange])

    return (
        <>
        <DateFilter dateRange = {dateRange} handleChange = {handleChange}/>
        <Dashboard loading = {loading} error = {error} allChartData= {allChartData}/>
        </>
    )

}