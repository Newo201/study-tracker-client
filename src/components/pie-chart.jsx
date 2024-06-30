import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import axios from 'axios';
import useAxios from "../hooks/useAxios"
import { useEffect, useState } from 'react';

const testData = [
  { id: 0, value: 10, label: 'Maths'},
  { id: 1, value: 15, label: 'Science'},
  { id: 2, value: 20, label: 'English'},
]

export default function ChartPie(props) {

  // const [pieData, setPieData] = useState(testData)
  // const {loading, error, value} = useAxios(`/study/${props.filter}`, 
  //   {method: 'get', 
  //   params: {start_date: "2024-05-01", end_date: "2024-07-01"}}
  // )

  // function wrangle_data(data) {
  //   const newData = data.map((row, index) => {
  //     return ({id: index, 
  //     value: row.study_completed, 
  //     label: props.filter === 'subject'? row.subject: row.study_type})
  //   })
  //   return newData
  // }

  // useEffect(() => {
  //   if (value) {
  //       setPieData(wrangle_data(value))
  //   }
  //   }, [value]
  // )

  return (
    <div onClick = {() => {props.whenClicked(props.name)}}>
        <h4>Study Completed By {props.name.slice(3)}</h4>
        <PieChart
        series= {props.height === "big" ? 
          [{
            // arcLabel: (item) => `${item.label}`,
            data: props.data ? props.data : testData
          }] :
          [{
            data: props.data ? props.data : testData
          }]
        }
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: 'white',
            fontWeight: 'bold',
          },
        }}
        height = {props.height === "big"? 300 : 150}
        />
    </div>
  );
}
