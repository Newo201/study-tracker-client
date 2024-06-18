import ChartLine from "./line-chart"
import ChartStack from "./stacked-chart"
import ChartPie from "./pie-chart"
import { useState, useEffect } from "react"
import Test from "./test"
import useUpdateDashboard from "../hooks/useUpdateDashboard"

export default function Dashboard() {

    const [topChart, setTopChart] = useState("Line")

    const start_date = "2024-05-01"
    const end_date = "2024-07-01"

    const data = useUpdateDashboard({start_date: start_date, end_date: end_date})

    function manageClick(chart) {
        console.log(`${chart} chart has been clicked`)
        setTopChart(chart)
    }

    // useEffect(() => {
    //     console.log(data)
    // }, [data])

    switch(topChart) {
        case "Line":
            return (
            <div className = "container">
                <Test />
                <div className = "dashboard">
                    <div className = "big-chart">
                        <ChartLine height = "big" whenClicked = {manageClick}/>
                    </div>
                    <ChartStack height = "small" filter = "type" whenClicked = {manageClick}/>
                    <ChartPie height = "small" filter = "subject" whenClicked = {manageClick}/>
                    <ChartPie height = "small" filter = "type" whenClicked = {manageClick}/>
                </div>
            </div>
            )
        case "subject":
            return (
                <div className = "container">
                    <div className = "dashboard">
                        <div className = "big-chart">
                            <ChartPie height = "big" filter = "subject" whenClicked = {manageClick}/>
                        </div>
                        <ChartPie height = "small" filter = "type" whenClicked = {manageClick}/>
                        <ChartStack height = "small" filter = "type" whenClicked = {manageClick}/>
                        <ChartLine height = "small" whenClicked = {manageClick}/>
                    </div>
                </div>
            )
        case "type":
            return (
                <div className = "container">
                <div className = "dashboard">
                    <div className = "big-chart">
                        <ChartPie height = "big" filter = "type" whenClicked = {manageClick}/>
                    </div>
                    <ChartPie height = "small" filter = "subject" whenClicked = {manageClick}/>
                    <ChartStack height = "small" filter = "type" whenClicked = {manageClick}/>
                    <ChartLine height = "small" whenClicked = {manageClick}/>
                </div>
            </div>
            )
        case "Stack":
            return (
                <div className = "container">
                <div className = "dashboard">
                    <div className = "big-chart">
                        <ChartStack height = "big" filter = "type" whenClicked = {manageClick}/>
                    </div>
                    <ChartLine height = "small" whenClicked = {manageClick}/>
                    <ChartPie height = "small" filter = "subject" whenClicked = {manageClick}/>
                    <ChartPie height = "small" filter = "type" whenClicked = {manageClick}/>
                </div>
                </div>
            )
        default: 
            return (
                <div className = "container">
                <div className = "dashboard">
                    <div className = "big-chart">
                        <ChartLine height = "big" whenClicked = {manageClick}/>
                    </div>
                    <ChartStack height = "small" filter = "type" whenClicked = {manageClick}/>
                    <ChartPie height = "small" filter = "subject" whenClicked = {manageClick}/>
                    <ChartPie height = "small" filter = "type" whenClicked = {manageClick}/>
                </div>
                </div>
            )
    }

}