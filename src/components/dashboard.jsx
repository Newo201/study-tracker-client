import ChartLine from "./line-chart"
import ChartStack from "./stacked-chart"
import ChartPie from "./pie-chart"
import { useState } from "react"

export default function Dashboard() {

    const [topChart, setTopChart] = useState("Line")

    function manageClick(chart) {
        console.log(`${chart} chart has been clicked`)
        setTopChart(chart)
    }

    switch(topChart) {
        case "Line":
            return (
            <div className = "container">
                <div className = "dashboard">
                    <div className = "big-chart">
                        <ChartLine height = "big" whenClicked = {manageClick}/>
                    </div>
                    <ChartStack height = "small" whenClicked = {manageClick}/>
                    <ChartPie height = "small" filter = "Subject" whenClicked = {manageClick}/>
                    <ChartPie height = "small" filter = "Type" whenClicked = {manageClick}/>
                </div>
            </div>
            )
        case "Subject":
            return (
                <div className = "container">
                    <div className = "dashboard">
                        <div className = "big-chart">
                            <ChartPie height = "big" filter = "Subject" whenClicked = {manageClick}/>
                        </div>
                        <ChartPie height = "small" filter = "Type" whenClicked = {manageClick}/>
                        <ChartStack height = "small" whenClicked = {manageClick}/>
                        <ChartLine height = "small" whenClicked = {manageClick}/>
                    </div>
                </div>
            )
        case "Type":
            return (
                <div className = "container">
                <div className = "dashboard">
                    <div className = "big-chart">
                        <ChartPie height = "big" filter = "Type" whenClicked = {manageClick}/>
                    </div>
                    <ChartPie height = "small" filter = "Subject" whenClicked = {manageClick}/>
                    <ChartStack height = "small" whenClicked = {manageClick}/>
                    <ChartLine height = "small" whenClicked = {manageClick}/>
                </div>
            </div>
            )
        case "Stack":
            return (
                <div className = "container">
                <div className = "dashboard">
                    <div className = "big-chart">
                        <ChartStack height = "big" whenClicked = {manageClick}/>
                    </div>
                    <ChartLine height = "small" whenClicked = {manageClick}/>
                    <ChartPie height = "small" filter = "Subject" whenClicked = {manageClick}/>
                    <ChartPie height = "small" filter = "Type" whenClicked = {manageClick}/>
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
                    <ChartStack height = "small" whenClicked = {manageClick}/>
                    <ChartPie height = "small" filter = "Subject" whenClicked = {manageClick}/>
                    <ChartPie height = "small" filter = "Type" whenClicked = {manageClick}/>
                </div>
                </div>
            )
    }

}