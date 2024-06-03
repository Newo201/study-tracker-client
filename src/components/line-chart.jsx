import {LineChart} from "@mui/x-charts"

export default function ChartLine(props) {
    return (
        <div onClick = {() => {props.whenClicked("Line")}}>
        <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
            series={[
                {
                data: [2, 5.5, 2, 8.5, 1.5, 5],
                },
            ]}
            height = {props.height === "big"? 300 : 150}
        />
        </div>
    )
}