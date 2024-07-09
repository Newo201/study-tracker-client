import {useState, useEffect} from "react"
import useAxiosMultiple from "./useAxiosMultiple"

// // Test Data
// const testLineData = {'weeks': [22, 23], 'study': [1, 5]}
// const testPieData =  [
//     { id: 0, value: 10, label: 'Maths'},
//     { id: 1, value: 15, label: 'Science'},
//     { id: 2, value: 20, label: 'English'},
// ] 
// const seriesA = {
//     data: [2, 3, 1, 4, 5],
//     label: 'Assignments',
// };
// const seriesB = {
//     data: [3, 1, 4, 2, 1],
//     label: 'Lectures',
// };
// const seriesC = {
//     data: [3, 2, 4, 5, 1],
//     label: 'Tutorials',
// }; 
// const testStackData = [
//     { ...seriesA, stack: 'total' },
//     { ...seriesB, stack: 'total' },
//     { ...seriesC, stack: 'total' },
// ]

// Wrangle Data Functions

// Need to improve this function so it takes into account zero entries
function wrangleLineData(data) {

    const weeks = data.map(row => row.week_completed)
    const study = data.map(row => row.study_completed)

    const first_week = weeks[0]
    const last_week = weeks.slice(-1)[0]

    console.log(last_week)

    let week_data = []
    let study_data = []

    let num_entries = 0

    for (var week = first_week; week < last_week + 1; week++) {
       if (weeks.includes(week)) {
        console.log(week)
        week_data.push(week)
        study_data.push(study[num_entries])
        num_entries++
       }
       else {
        week_data.push(week)
        study_data.push(0)
       }
    }

    console.log(week_data)

    return {'weeks': week_data, 'study': study_data}
}

function wranglePieData(data, filter) {
    const newData = data.map((row, index) => {
      return ({id: index, 
      value: row.study_completed, 
      label: filter === 'subject'? row.subject: row.study_type})
    })
    return newData
  }

function wrangleStackData(data) {
    const uniqueWeeks = Array.from(new Set(data.map(row => row.week_completed))).sort()
    const uniqueTypes = new Set(data.map(row => row.study_type))
    // Group Data into a nested object with first level as study type and second level as week completed
    const data_dict = {}
    data.map(row => {
        if (data_dict[row.study_type]) {
            data_dict[row.study_type][row.week_completed] = 1
        }
        else {
            data_dict[row.study_type] = {}
            data_dict[row.study_type][row.week_completed] = 1
        }
    })
    // Loop through each week and each type to get the data into desired format
    const graph_data = []
    uniqueTypes.forEach(type => {
      let lst = []

      uniqueWeeks.forEach(week => {
        if (data_dict[type][week]) {
          lst.push(data_dict[type][week])
        } else {
          lst.push(0)
        }
      })

      graph_data.push({data: lst, label: type, stack: 'total'})
    })
    return [Array.from(uniqueWeeks).sort(), graph_data]
  }

// Custom Hook Logic

export default function useUpdateDashboard(date_range, dependencies = []) {

    const [allChartData, setAllChartData] = useState({})

    const {start_date, end_date} = date_range

    const configs = [
        {url: "/study", method: "get", params: {start_date, end_date}},
        {url: "/study/subject", method: "get", params: {start_date, end_date}},   
        {url: "/study/type", method: "get", params: {start_date, end_date}},  
        {url: "/study/type", method: "get", params: {start_date, end_date, filterWeek: true}}
    ]

    const {loading, error, value} = useAxiosMultiple(configs, dependencies)

    useEffect(() => {
        // console.log(loading)
        if (!loading) {
            
            console.log("Hello")
            console.log(error)
            console.log(value)

            const lineChartData = wrangleLineData(value[0])
            const pieSubjectData = wranglePieData(value[1], "subject")
            const pieTypeData = wranglePieData(value[2], "type")
            const stackChartData = wrangleStackData(value[3])

            const newData = {
                'line': lineChartData,
                'pieSubject': pieSubjectData,
                'pieType': pieTypeData,
                'stack': stackChartData
            }

            setAllChartData(newData)
        }

    }, [loading, error, value])

    return {loading, error, allChartData}
}