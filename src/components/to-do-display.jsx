import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import ToDo from "./to-do"
import Col from 'react-bootstrap/esm/Col';
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import useAxios from "../hooks/useAxios";
import ToDoHeader from "./to-do-header";

let ToDoList = [
    {'id': 1, 'task': 'Complete English Assignment', 'subject': 'English', 'study_type': 'Assignment'},
    {'id': 2, 'task': 'Watch Maths Lecture', 'subject': 'Maths', 'study_type': 'Lecture'},
    {'id': 3, 'task': 'Science Tutorial Prep', 'subject': 'Science', 'study_type': 'Tutorial'}
]

export default function ToDoDisplay() {

    const [outstandingToDos, setOutstandingToDos] = useState(ToDoList)
    const [completedToDos, setCompletedToDos] = useState(ToDoList)

    // Load the data from the backend
    useEffect(() => {
        console.log("Calling Backend")
        axios.get("/study/outstanding").then(res => setOutstandingToDos(res.data))
        axios.get("/study/completed").then(res => setCompletedToDos(res.data))
    }, [])

    // Need to replace this with a backend query
    function initToDo() {
        axios.post("/study", {'study_type': 'Select', 'subject': 'Select', 'task': ''})
        .then(res => setOutstandingToDos(prevToDos => [
            ...prevToDos,
            res.data
        ]))
        // Find the right ID to add
        // const ids = outstandingToDos.map(todo => todo.id)
        // const maxid = Math.max(...ids)
        // setOutstandingToDos(prevToDos => [
        //     ...prevToDos, 
        //     {'id': maxid + 1, 'task': '', 'subject': '', 'study_type': ''}
        // ])
    }

    function duplicateToDo(content) {
        axios.post(`/study/duplicate/${content.id}`)
        .then(res => setOutstandingToDos(prevToDos => [
            ...prevToDos,
            res.data
        ]))
    }

    // function addToDo(content) {
    //     setOutstandingToDos(prevValue => {
    //         return [...prevValue.slice(0, prevValue.length - 1), content]
    //     })
    //     axios.post("/study", content)
    // }

    function updateToDo(content) {
        // // Update the FrontEnd
        const indexArray = outstandingToDos.map(todo => todo.id)
        const toDoIndex = indexArray.indexOf(content.id)
        console.log(indexArray, toDoIndex)
        setOutstandingToDos(prevValue => {
            return [...prevValue.slice(0, toDoIndex), content, ...prevValue.slice(toDoIndex + 1, prevValue.length)]
        })
        // Update the BackEnd
        axios.patch(`/study/${content.id}`, content)

    }

    function deleteToDo(content) {
        // Update the FrontEnd
        console.log(content.id)
        setOutstandingToDos(prevValue => {
            return prevValue.filter(todo => todo.id !== content.id)
        })
        // Update the BackEnd
        axios.delete(`/study/${content.id}`)
    }

    useEffect(() => {
        console.log(outstandingToDos)
    }, [outstandingToDos])

    return (
       <Container>
        <ToDoHeader initToDo={initToDo}/>
        <Row>
            {outstandingToDos.map(todo => {
                return <Col xs = {4}><ToDo key = {todo.id} id = {todo.id} item = {todo} 
                updateToDo={updateToDo} deleteToDo={deleteToDo}/></Col>
            })}
        </Row>
        <h2 className = "py-5">Completed To Dos</h2>
        <Row>
            {completedToDos.map(todo => {
                return <Col xs = {4}><ToDo key = {todo.id} id = {todo.id} item = {todo} 
                updateToDo={updateToDo} deleteToDo={deleteToDo}/></Col>
            })}
        </Row>
       </Container>
    )
}