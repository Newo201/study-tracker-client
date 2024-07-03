import { useState } from "react"
import DashboardChart from "./dashboard-chart"

const bigHeight = 300
const smallHeight = 150

export default function Dashboard({loading, error, allChartData}) {

    const [dashboardOrder, setDashboardOrder] = useState([
        'line',
        'pieSubject',
        'pieType',
        'stack'
    ])

    // Change the dashboard order to display the clicked chart first
    // This will not call the API so we don't need to reload the data
    function manageClick(chart) {
        console.log(`${chart} chart has been clicked`)
        setDashboardOrder(prevOrder => [chart, ...prevOrder.filter(item => item !== chart)])
    }

    return (
        !loading ?
        <div className = "container pt-5">
        <div className = "dashboard">
            {console.log(dashboardOrder)}
            {dashboardOrder.map((chartType, index) => {
                // The first chart in the list is displayed bigger and the other charts are smaller
                if (index === 0) {
                    return (
                        <div className = "big-chart">
                            <DashboardChart type = {chartType} height = {bigHeight} data = {allChartData[chartType]} 
                            loading = {loading} whenClicked = {manageClick}/>
                        </div>
                    )
                }
                else {
                    return (
                    <DashboardChart type = {chartType} height = {smallHeight} data = {allChartData[chartType]} 
                    loading = {loading} whenClicked = {manageClick}/>
                    )
                }
                
            })}
        </div>
        </div>
        :
        <div>Loading ...</div>
    )
}