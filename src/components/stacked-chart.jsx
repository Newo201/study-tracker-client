import { BarChart } from '@mui/x-charts/BarChart';
import { useState, useEffect } from 'react';
import useAxios from "../hooks/useAxios"

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

  // const [chartData, setChartData] = useState(testData)
  // const [weeks, setWeeks] = useState([1,2,3,4,5])

  // const {loading, error, value} = useAxios(`/study/${props.filter}`, 
  //   {method: 'get', 
  //   params: {start_date: "2024-05-01", end_date: "2024-07-01", filterWeek: true}}
  // )

  // function wrangle_data(data) {
  //   const uniqueWeeks = new Set(data.map(row => row.week_completed))
  //   const uniqueTypes = new Set(data.map(row => row.study_type))
  //   // Group Data into a nested object with first level as study type and second level as week completed
  //   const data_dict = {'Lecture': {}, 'Tutorials': {}}  
  //   data.map(row => {
  //       if (data_dict[row.study_type]) {
  //           data_dict[row.study_type][row.week_completed] = 1
  //       }
  //       else {
  //           data_dict[row.study_type] = {}
  //       }
  //   })
  //   // Loop through each week and each type to get the data into desired format
  //   const graph_data = []
  //   uniqueTypes.forEach(type => {
  //     let lst = []
  //     uniqueWeeks.forEach(week => {
  //       if (data_dict[type][week]) {
  //         lst.push(data_dict[type][week])
  //       } else {
  //         lst.push(0)
  //       }
  //     })
  //     graph_data.push({data: lst, label: type, stack: 'total'})
  //   })
  //   return [Array.from(uniqueWeeks), graph_data]
  // }

  // useEffect(() => {
  //   if (value) {
  //       const [uniqueWeeks, graph_data] = wrangle_data(value)
  //       setWeeks(uniqueWeeks)
  //       setChartData(graph_data)
  //   }
  //   }, [value]
  // )

  return (
    <div onClick = {() => {props.whenClicked("stack")}}>
      <h3>Study Completed Per Week</h3>
    <BarChart
      xAxis = {[{scaleType: 'band', data: props.data ? props.data[0]: [22, 23], label: 'Week'}]}
      yAxis = {[{label: 'Study Completed'}]}
      series= {props.data ? props.data[1]: testData}
      height = {props.height === "big"? 300 : 150}
    />
    </div>
  );
}