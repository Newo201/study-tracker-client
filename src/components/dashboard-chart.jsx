import ChartLine from "./line-chart"
import ChartPie from "./pie-chart"
import ChartStack from "./stacked-chart"

export default function DashboardChart(props) {

    // As props pass in size (default is small), data and chart type
    switch (props.type) {
        case 'line':
            return (
                <ChartLine height = {props.height} data = {props.data} 
                loading = {props.loading}/>
            )
        case 'pieSubject':
            return (
                <ChartPie height = {props.height} data = {props.data} 
                loading = {props.loading}/>
            )
        case 'pieType':
            return (
                <ChartPie height = {props.height} data = {props.data} 
                loading = {props.loading}/>
            )
        case 'stack':
            return (
                <ChartStack height = {props.height} data = {props.data} 
                loading = {props.loading}/>
            )
        default:
            return (
                <div>No Chart to Return</div>
            )  
    }
}

