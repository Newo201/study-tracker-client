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

export default function ChartStack(props) {
  return (
    <div onClick = {() => {props.whenClicked("Stack")}}>
      <h3>Study Completed Per Week</h3>
    <BarChart
      xAxis = {[{scaleType: 'band', data: [1,2,3,4,5], label: 'Week'}]}
      yAxis = {[{label: 'Study Completed'}]}
      series={[
        { ...seriesA, stack: 'total' },
        { ...seriesB, stack: 'total' },
        { ...seriesC, stack: 'total' },
      ]}
      height = {props.height === "big"? 300 : 150}
    />
    </div>
  );
}