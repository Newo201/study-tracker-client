import {LineChart} from "@mui/x-charts"

// Need to have test data to avoid getting errors while the components are loading
const testData = {'weeks': [22, 23], 'study': [1, 5]}

export default function ChartLine(props) {

    return (
        !props.loading ?
        <div onClick = {() => {props.whenClicked("line")}}>
        <h4>Study Completed Per Week</h4>
        <LineChart
            xAxis={[{ data: props.data ? props.data.weeks: testData.weeks, label: 'Week' }]}
            yAxis = {[{label: 'Study Completed'}]}
            series={[
                {
                curve: "linear",
                data: props.data ? props.data.study: testData.study,
                },
            ]}
            height = {props.height}
        />
        </div>
        :
        <div>Loading ...</div>
    )
}