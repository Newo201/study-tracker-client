import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

//ToDo: make labels dynamic

export default function ChartPie(props) {

  let labels

  // This will likely be replaced once I have the API query
  if (props.filter === "Type") {
    labels = ['Lectures', 'Assignments', 'Tutorials']
  } else {
    labels = ['Maths', 'Science', 'English']
  }

  return (
    <div onClick = {() => {props.whenClicked(props.filter)}}>
        <h3>Study Completed By {props.filter}</h3>
        <PieChart
        series= {props.height === "big" ? 
          [{
            arcLabel: (item) => `${item.label}`,
            data: [
                { id: 0, value: 10, label: labels[0]},
                { id: 1, value: 15, label: labels[1]},
                { id: 2, value: 20, label: labels[2] },
            ],
          }] :
          [{
            data: [
              { id: 0, value: 10, label: labels[0]},
              { id: 1, value: 15, label: labels[1]},
              { id: 2, value: 20, label: labels[2] },
            ],
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
