import { useState, useEffect } from "react"
import useUpdateDashboard from "../hooks/useUpdateDashboard"
import DashboardChart from "./dashboard-chart"
import Test from "./test"
import DatePickerValue from "./date-picker"

export default function Dashboard() {

    // const [topChart, setTopChart] = useState("Line")
    const [dashboardOrder, setDashboardOrder] = useState([
        'line',
        'pieSubject',
        'pieType',
        'stack'
    ])

    const start_date = "2024-05-01"
    const end_date = "2024-07-01"

    const {loading, error, allChartData} = useUpdateDashboard({start_date: start_date, end_date: end_date})
    // console.log(allChartData)

    function manageClick(chart) {
        console.log(`${chart} chart has been clicked`)
        let currentOrder = dashboardOrder.indexOf(chart)
        setDashboardOrder(prevOrder => [chart, ...prevOrder.filter(item => item !== chart)])
        // setDashboardOrder(prevOrder => [chart, ...prevOrder])
        // console.log(dashboardOrder.splice(currentOrder, 1))
        // console.log(dashboardOrder.splice(currentOrder, 1)[0])
        // console.log(dashboardOrder.unshift(dashboardOrder.splice(currentOrder, 1)[0]))
        // setTopChart(chart)
    }

    return (
        !loading ?
        <div className = "container pt-5">
        <div className = "dashboard">
            {console.log(dashboardOrder)}
            {dashboardOrder.map((chartType, index) => {
                if (index === 0) {
                    // console.log(loading, allChartData)
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