import axios from "axios"
import { useState, useEffect } from "react"

export default function Test() {

    const [firstToDo, setFirstToDO] = useState({})
    const [secondToDo, setSecondToDo] = useState({})

    useEffect(() => {
        axios.all([
            axios('https://jsonplaceholder.typicode.com/todos/1', {method: 'get'}),
            axios('https://jsonplaceholder.typicode.com/todos/2', {method: 'get'})
        ])
        .then(axios.spread((data1, data2) => {
            console.log('data1', data1.data, 'data2', data2.data)
            setFirstToDO(data1.data)
            setSecondToDo(data2.data)
        }));
    }, [])


    return (
        <>
        <div>{firstToDo.title}</div>
        </>
    )
}