import { useState, useEffect } from "react"
import useUpdateDashboard from "../hooks/useUpdateDashboard"
import DashboardChart from "./dashboard-chart"
import Test from "./test"
import DatePickerValue from "./date-picker"

export default function Dashboard({loading, error, allChartData}) {

    const [dashboardOrder, setDashboardOrder] = useState([
        'line',
        'pieSubject',
        'pieType',
        'stack'
    ])

    function manageClick(chart) {
        console.log(`${chart} chart has been clicked`)
        let currentOrder = dashboardOrder.indexOf(chart)
        setDashboardOrder(prevOrder => [chart, ...prevOrder.filter(item => item !== chart)])
    }

    return (
        !loading ?
        <div className = "container pt-5">
        <div className = "dashboard">
            {console.log(dashboardOrder)}
            {dashboardOrder.map((chartType, index) => {
                if (index === 0) {
                    return (
                        <div className = "big-chart">
                            <DashboardChart type = {chartType} height = "big" data = {allChartData[chartType]} 
                            loading = {loading} whenClicked = {manageClick}/>
                        </div>
                    )
                }
                else {
                    return (
                    <DashboardChart type = {chartType} height = "small" data = {allChartData[chartType]} 
                    loading = {loading} whenClicked = {manageClick}/>
                    )
                }
                
            })}

            {/* <div className = "big-chart">
                <ChartLine height = "big" data = {allChartData[chartType]} loading = {loading}/>
            </div> */}
            {/* <ChartStack height = "small" filter = "type" whenClicked = {manageClick}/>
            <ChartPie height = "small" filter = "subject" whenClicked = {manageClick}/>
            <ChartPie height = "small" filter = "type" whenClicked = {manageClick}/> */}
        </div>
        </div>
        :
        <div>Loading ...</div>
    )

    // switch(topChart) {
    //     case "Line":
    //         return (
    //         <div className = "container">
    //             <Test />
    //             <div className = "dashboard">
    //                 <div className = "big-chart">
    //                     <ChartLine height = "big" whenClicked = {manageClick}/>
    //                 </div>
    //                 <ChartStack height = "small" filter = "type" whenClicked = {manageClick}/>
    //                 <ChartPie height = "small" filter = "subject" whenClicked = {manageClick}/>
    //                 <ChartPie height = "small" filter = "type" whenClicked = {manageClick}/>
    //             </div>
    //         </div>
    //         )
    //     case "subject":
    //         return (
    //             <div className = "container">
    //                 <div className = "dashboard">
    //                     <div className = "big-chart">
    //                         <ChartPie height = "big" filter = "subject" whenClicked = {manageClick}/>
    //                     </div>
    //                     <ChartPie height = "small" filter = "type" whenClicked = {manageClick}/>
    //                     <ChartStack height = "small" filter = "type" whenClicked = {manageClick}/>
    //                     <ChartLine height = "small" whenClicked = {manageClick}/>
    //                 </div>
    //             </div>
    //         )
    //     case "type":
    //         return (
    //             <div className = "container">
    //             <div className = "dashboard">
    //                 <div className = "big-chart">
    //                     <ChartPie height = "big" filter = "type" whenClicked = {manageClick}/>
    //                 </div>
    //                 <ChartPie height = "small" filter = "subject" whenClicked = {manageClick}/>
    //                 <ChartStack height = "small" filter = "type" whenClicked = {manageClick}/>
    //                 <ChartLine height = "small" whenClicked = {manageClick}/>
    //             </div>
    //         </div>
    //         )
    //     case "Stack":
    //         return (
    //             <div className = "container">
    //             <div className = "dashboard">
    //                 <div className = "big-chart">
    //                     <ChartStack height = "big" filter = "type" whenClicked = {manageClick}/>
    //                 </div>
    //                 <ChartLine height = "small" whenClicked = {manageClick}/>
    //                 <ChartPie height = "small" filter = "subject" whenClicked = {manageClick}/>
    //                 <ChartPie height = "small" filter = "type" whenClicked = {manageClick}/>
    //             </div>
    //             </div>
    //         )
    //     default: 
    //         return (
    //             <div className = "container">
    //             <div className = "dashboard">
    //                 <div className = "big-chart">
    //                     <ChartLine height = "big" whenClicked = {manageClick}/>
    //                 </div>
    //                 <ChartStack height = "small" filter = "type" whenClicked = {manageClick}/>
    //                 <ChartPie height = "small" filter = "subject" whenClicked = {manageClick}/>
    //                 <ChartPie height = "small" filter = "type" whenClicked = {manageClick}/>
    //             </div>
    //             </div>
    //         )
    // }

}