import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import axios from 'axios';
import { useEffect, useState } from 'react';

const testData = [
  { id: 0, value: 10, label: 'Maths'},
  { id: 1, value: 15, label: 'Science'},
  { id: 2, value: 20, label: 'English'},
]

//ToDo: make labels dynamic

export default function ChartPie(props) {

  const [pieData, setPieData] = useState(testData)

  // let labels

  useEffect(() => {
    const fetchData = async () => {
      console.log(props.filter)
      const response = await axios.post(`/study/${props.filter}`)
      // console.log(response.data)

      const data = response.data.map((row, index) => {
        return ({id: index, 
        value: row.study_completed, 
        label: props.filter === 'subject'? row.subject: row.study_type})
      })
      setPieData(data)
    }
    fetchData()
  }, [])

  console.log(pieData)

  // if (props.filter === "type") {
  //   labels = ['Lectures', 'Assignments', 'Tutorials']
  // } else {
  //   labels = ['Maths', 'Science', 'English']
  // }

  return (
    <div onClick = {() => {props.whenClicked(props.filter)}}>
        <h3>Study Completed By {props.filter}</h3>
        <PieChart
        series= {props.height === "big" ? 
          [{
            arcLabel: (item) => `${item.label}`,
            data: pieData
          }] :
          [{
            data: pieData
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
