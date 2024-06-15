import { BarChart } from '@mui/x-charts/BarChart';
import { useState, useEffect } from 'react';
import axios from 'axios';

const seriesA = {
  data: [2, 3, 1, 4, 5],
  label: 'Assignments',
};
const seriesB = {
  data: [3, 1, 4, 2, 1],
  label: 'Lectures',
};
const seriesC = {
  data: [3, 2, 4, 5, 1],
  label: 'Tutorials',
};

const testData = [
  { ...seriesA, stack: 'total' },
  { ...seriesB, stack: 'total' },
  { ...seriesC, stack: 'total' },
]

export default function ChartStack(props) {

  const [chartData, setChartData] = useState(testData)
  const [weeks, setWeeks] = useState([1,2,3,4,5])

  useEffect(() => {
    const fetchData = async() => {
        const result = await axios.post("/study/type", {filterWeek: true})
        const data = result.data
        // Make the data into two arrays for weeks and study
        console.log(data)
        // Find unique weeks and subject types
        const uniqueWeeks = new Set(data.map(row => row.week_completed))
        setWeeks(Array.from(uniqueWeeks))
        const uniqueTypes = new Set(data.map(row => row.study_type))
        console.log(uniqueWeeks, uniqueTypes)
        // Group Data into a nested object with first level as study type and second level as week completed
        const data_dict = {'Lecture': {}, 'Tutorials': {}}  
        data.map(row => {
            if (data_dict[row.study_type]) {
                data_dict[row.study_type][row.week_completed] = 1
            }
            else {
                data_dict[row.study_type] = {}
            }
        })
        // Loop through each week and each type to get the data into desired format
        const graph_data = []
        uniqueTypes.forEach(type => {
          let lst = []
          uniqueWeeks.forEach(week => {
            if (data_dict[type][week]) {
              lst.push(data_dict[type][week])
            } else {
              lst.push(0)
            }
          })
          graph_data.push({data: lst, label: type, stack: 'total'})
        })
        setChartData(graph_data)
    }
    fetchData()
}, [])

  return (
    <div onClick = {() => {props.whenClicked("Stack")}}>
      <h3>Study Completed Per Week</h3>
    <BarChart
      xAxis = {[{scaleType: 'band', data: weeks, label: 'Week'}]}
      yAxis = {[{label: 'Study Completed'}]}
      series={chartData}
      height = {props.height === "big"? 300 : 150}
    />
    </div>
  );
}