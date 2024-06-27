import ChartLine from "./line-chart"
import ChartPie from "./pie-chart"
import ChartStack from "./stacked-chart"

export default function DashboardChart(props) {

    // As props pass in size (default is small), data and chart type
    switch (props.type) {
        case 'line':
            return (
                <ChartLine height = {props.height} data = {props.data} 
                loading = {props.loading} whenClicked = {props.whenClicked}/>
            )
        case 'pieSubject':
            return (
                <ChartPie name = 'pieSubject' height = {props.height} data = {props.data} 
                loading = {props.loading} whenClicked = {props.whenClicked}/>
            )
        case 'pieType':
            return (
                <ChartPie name = 'pieType' height = {props.height} data = {props.data} 
                loading = {props.loading} whenClicked = {props.whenClicked}/>
            )
        case 'stack':
            return (
                <ChartStack height = {props.height} data = {props.data} 
                loading = {props.loading} whenClicked = {props.whenClicked}/>
            )
        default:
            return (
                <div>No Chart to Return</div>
            )  
    }
}

