import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

// Need to have test data to avoid getting errors while the components are loading
const testData = [
  { id: 0, value: 10, label: 'Maths'},
  { id: 1, value: 15, label: 'Science'},
  { id: 2, value: 20, label: 'English'},
]

export default function ChartPie(props) {

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
        height = {props.height}
        />
    </div>
  );
}
