import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import ToDo from "./to-do"
import Col from 'react-bootstrap/esm/Col';
import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import useAxios from "../hooks/useAxios";

let ToDoList = [
    {'id': 1, 'task': 'Complete English Assignment', 'subject': 'English', 'study_type': 'Assignment'},
    {'id': 2, 'task': 'Watch Maths Lecture', 'subject': 'Maths', 'study_type': 'Lecture'},
    {'id': 3, 'task': 'Science Tutorial Prep', 'subject': 'Science', 'study_type': 'Tutorial'}
]

export default function ToDoDisplay() {

    // const {loading, error, data} = useAxios("/study")

    const [allToDos, setAllToDos] = useState(ToDoList)

    // async function recallData() {
    //     const newData = await axios.get("/study")
    //     setAllToDos(newData)
    // }

    useEffect(() => {
        console.log("Calling Backend")
        const newData = axios.get("/study").then(res => setAllToDos(res.data))
    }, [])

    function updateToDo(content) {
        // // Update the FrontEnd
        const indexArray = allToDos.map(todo => todo.id)
        const toDoIndex = indexArray.indexOf(content.id)
        console.log(indexArray, toDoIndex)
        setAllToDos(prevValue => {
            return [...prevValue.slice(0, toDoIndex), content, ...prevValue.slice(toDoIndex + 1, prevValue.length)]
        })
        // Update the BackEnd
        axios.patch(`/study/${content.id}`, content)

    }

    function deleteToDo(content) {
        // Update the FrontEnd
        console.log(content.id)
        setAllToDos(prevValue => {
            return prevValue.filter(todo => todo.id !== content.id)
        })
        // Update the BackEnd
        axios.delete(`/study/${content.id}`)
    }

    useEffect(() => {
        console.log(allToDos)
    }, [allToDos])

    return (
       <Container>
        <Row>
            {allToDos.map(todo => {
                return <Col xs = {4}><ToDo key = {todo.id} id = {todo.id} item = {todo} updateToDo={updateToDo} deleteToDo={deleteToDo}/></Col>
            })}
        </Row>
       </Container>
    )
}