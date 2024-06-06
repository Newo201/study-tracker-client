import {LineChart} from "@mui/x-charts"
import { useState, useEffect } from "react"
import axios from "axios"

export default function ChartLine(props) {

    const [chartData, setChartData] = useState({})

    useEffect(() => {
        (async () => {
          const response = await axios.post("/study")
          // Data returns an array of dictionaries, I need to transform this into a dictionary of arrays
          const weeks = (response.data.map(row => (row.week_completed)))
          const study_completed =  (response.data.map(row => (parseInt(row.study_completed))))
          console.log(weeks)
          
          setChartData({'weeks': weeks, 'study': study_completed})
        })
        ()
        
      }, [])

    console.log(chartData.weeks)

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