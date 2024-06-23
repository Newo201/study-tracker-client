import axios from "axios"
import { useState, useEffect } from "react"
import useAsync from "../hooks/useAsync"

export default function Test() {

    const [ToDos, setToDos] = useState([])

    useEffect(() => {
        setToDos([1,2,3])
    }, [])

    useEffect(() => {
        console.log(ToDos)
    }, [ToDos])

    // const {loading, error, value} = useAsync(() => {
    //     return axios.all([
    //             axios('https://jsonplaceholder.typicode.com/todos/1', {method: 'get'}),
    //             axios('https://jsonplaceholder.typicode.com/todos/2', {method: 'get'})
    //     ]).then(responses => {
    //         return responses.map(response => response.data)
    //     })
    // }, [])

    // useEffect(() => {
    //     if (!loading) {
    //         setToDos(value.map(todo => todo.title))
    //     }
    // }, [loading])


    return (
        <>
        {/* <div>Loading: {loading.toString()}</div> */}
        <div>{ToDos.map(todo => <li>{todo}</li>)}</div>
        </>
    )
}