import {LineChart} from "@mui/x-charts"
import { useState, useEffect, useCallback } from "react"
import axios from "axios"

export default function ChartLine(props) {

    const [chartData, setChartData] = useState({'weeks': [22, 23], 'study': [1, 5]})

    // const fetchData = useCallback(async () => {
    //     const response = await axios.post("/study")
    //     const weeks = (response.data.map(row => (row.week_completed)))
    //     const study_completed =  (response.data.map(row => (parseInt(row.study_completed))))
    //     // setChartData({'weeks': weeks, 'study': study_completed})
    //     setChartData(1)
    //     console.log(chartData)
    // })

    useEffect(() => {
        const fetchData = async() => {
            const result = await axios.post("/study")
            const data = result.data
            // Make the data into two arrays for weeks and study
            const weeks = data.map(row => row.week_completed)
            const study = data.map(row => row.study_completed)
            setChartData({'weeks': weeks, 'study': study})
        }
        fetchData()
    }, [])

    // console.log(chartData)

    return (
        <div onClick = {() => {props.whenClicked("Line")}}>
        <h3>Study Completed Per Week</h3>
        <LineChart
            xAxis={[{ data: chartData.weeks, label: 'Week' }]}
            yAxis = {[{label: 'Study Completed'}]}
            series={[
                {
                curve: "linear",
                data: chartData.study,
                },
            ]}
            height = {props.height === "big"? 300 : 150}
        />
        </div>
    )
}