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
            <>
            <ChartLine whenClicked = {manageClick}/>
            <ChartStack whenClicked = {manageClick}/>
            <ChartPie whenClicked = {manageClick}/>
            </>
            )
        case "Pie":
            return (
            <>
            <ChartPie whenClicked = {manageClick}/>
            <ChartLine whenClicked = {manageClick}/>
            <ChartStack whenClicked = {manageClick}/>
            </>
            )
        case "Stack":
            return (
            <>
            <ChartStack whenClicked = {manageClick}/>
            <ChartPie whenClicked = {manageClick}/>
            <ChartLine whenClicked = {manageClick}/>
            </>
            )
    }

}