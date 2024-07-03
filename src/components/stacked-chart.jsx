import { BarChart } from '@mui/x-charts/BarChart';

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

// Need to have test data to avoid getting errors while the components are loading
const testData = [
  { ...seriesA, stack: 'total' },
  { ...seriesB, stack: 'total' },
  { ...seriesC, stack: 'total' },
]

export default function ChartStack(props) {

  // The first component of the data is the x-axis labels
  // The second component of the data is the corresponding stacks

  return (
    <div onClick = {() => {props.whenClicked("stack")}}>
      <h4>Study Completed Per Week</h4>
    <BarChart
      xAxis = {[{scaleType: 'band', data: props.data ? props.data[0]: [22, 23], label: 'Week'}]}
      yAxis = {[{label: 'Study Completed'}]}
      series= {props.data ? props.data[1]: testData}
      height = {props.height}
    />
    </div>
  );
}