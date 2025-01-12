// Standard Imports
import { useEffect, useReducer } from "react";
import axios from "axios";

// Styling Components
import {Container} from "react-bootstrap";

// Custom Components
import ToDoHeader from "./to-do-header";
import NewToDo from "./new-to-do";

let ToDoList = [
    {'id': 1, 'task': 'Complete English Assignment', 'subject': 'English', 'study_type': 'Assignment'},
    {'id': 2, 'task': 'Watch Maths Lecture', 'subject': 'Maths', 'study_type': 'Lecture'},
    {'id': 3, 'task': 'Science Tutorial Prep', 'subject': 'Science', 'study_type': 'Tutorial'}
]

// Patch and Delete Functions

function updateToDo(content, ToDos) {
    // Update Backend
    axios.patch(`/study/${content.id}`, content)
    // Update Frontend
    const indexArray = ToDos['Outstanding'].map(todo => todo.id)
    const toDoIndex = indexArray.indexOf(content.id)
    console.log(indexArray, toDoIndex)
    const oldOutstanding = ToDos['Outstanding']
    const newOutstanding = [
        ...oldOutstanding.slice(0, toDoIndex), 
        content, 
        ...oldOutstanding.slice(toDoIndex + 1, oldOutstanding.length)
    ]
    return {...ToDos, 'Outstanding': newOutstanding}
}


function completeToDo(content, ToDos) {
    // Update the Backend
    axios.patch(`/study/completed/${content.id}`)
    // Update the FrontEnd
    const newOutstanding = ToDos['Outstanding'].filter(todo => todo.id !== content.id)
    const newCompleted = [content, ...ToDos['Completed']].slice(0, 6)
    return {'Completed': newCompleted, 'Outstanding': newOutstanding}
}

function deleteToDo(content, ToDos) {
    // Update the BackEnd
    axios.delete(`/study/${content.id}`)
    // Update the FrontEnd
    const newOutstanding = ToDos['Outstanding'].filter(todo => todo.id !== content.id)
    return {...ToDos, 'Outstanding': newOutstanding}
}

const ACTIONS = {
    LOAD: "load",
    INIT: "init",
    COPY: "copy",
    UPDATE: "update",
    COMPLETE: "complete",
    DELETE: "delete"
}

function ToDoReducer(ToDos, action) {
    let newOutstanding
    let newCompleted
    switch (action.type) {
        case ACTIONS.LOAD:
            return {
                'Outstanding': action.payload.outstanding, 
                'Completed': action.payload.completed
            }
        case ACTIONS.INIT:
            newOutstanding = [...ToDos['Outstanding'], action.payload.newToDo]
            return {...ToDos, 'Outstanding': newOutstanding}
        case ACTIONS.UPDATE:
            return updateToDo(action.payload.content, ToDos)
        case ACTIONS.COMPLETE:
            return completeToDo(action.payload.content, ToDos)
        case ACTIONS.DELETE:
            return deleteToDo(action.payload.content, ToDos)
    }
}

export default function ToDoDisplay() {

    const [ToDos, setToDos] = useReducer(ToDoReducer, {'Completed': ToDoList, 'Outstanding': ToDoList})

    // Load the data from the backend
    useEffect(() => {
        axios.all([
            axios.get('/study/outstanding'), 
            axios.get('/study/completed')
        ]).then(axios.spread((outstandingToDos, completedToDos) => {
            setToDos({
                type: ACTIONS.LOAD,
                payload: {'outstanding': outstandingToDos.data, 'completed': completedToDos.data}
            })
        }))
    }, [])

    return (
        <Container>
        <ToDoHeader modifyToDo = {setToDos} ACTIONS = {ACTIONS}/>
        <div className = "to-do-grid align-items-stretch">
            {console.log(ToDos)}
            {ToDos['Outstanding'].map(todo => {
                return (
                    <NewToDo key = {todo.id} id = {todo.id} item = {todo} 
                    modifyToDo = {setToDos} ACTIONS = {ACTIONS} is_complete = {false}/>
                )
            })}
        </div>
        <h2 className = "py-5">Completed To Dos</h2>
        <div className = "to-do-grid align-items-stretch">
            {ToDos['Completed'].map(todo => {
                    return (
                        <NewToDo key = {todo.id} id = {todo.id} item = {todo} 
                        modifyToDo = {setToDos} ACTIONS = {ACTIONS} is_complete = {true}/>
                    )
                })}
        </div>
        </Container>
    )
}