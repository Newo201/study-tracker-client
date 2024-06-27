import {LineChart} from "@mui/x-charts"
import { useState, useEffect, useCallback } from "react"
import axios from "axios"
import useAxios from "../hooks/useAxios"
import useFetch from "../hooks/useFetch"

const testData = {'weeks': [22, 23], 'study': [1, 5]}

export default function ChartLine(props) {


    // const [chartData, setChartData] = useState({'weeks': [22, 23], 'study': [1, 5]})
    // const {loading, error, value} = useAxios("/study", 
    //     {method: 'get', 
    //     params: {start_date: "2024-05-01", end_date: "2024-07-01"}}
    // )

    // function wrangle_data(data) {
    //     const weeks = data.map(row => row.week_completed)
    //     const study = data.map(row => row.study_completed)
    //     return {'weeks': weeks, 'study': study}
    // }

    // useEffect(() => {
    //     if (value) {
    //         setChartData(wrangle_data(value))
    //     }
    // }, [value]
    // )

    // console.log(props.data)


    return (
        !props.loading ?
        <div onClick = {() => {props.whenClicked("line")}}>
        <h3>Study Completed Per Week</h3>
        <LineChart
            xAxis={[{ data: props.data ? props.data.weeks: testData.weeks, label: 'Week' }]}
            yAxis = {[{label: 'Study Completed'}]}
            series={[
                {
                curve: "linear",
                data: props.data ? props.data.study: testData.study,
                },
            ]}
            height = {props.height === "big"? 300 : 150}
        />
        {/* <div>
            {JSON.stringify(value, null, 2)}
        </div> */}
        </div>
        :
        <div>Loading ...</div>
    )
}