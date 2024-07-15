// Standard Imports
import { useState, useEffect } from 'react';
import axios from 'axios';

// Styling Components
import {Card, Form, Row, Col} from "react-bootstrap"
import { MdDelete } from "react-icons/md";
import { FaCheck, FaRegCopy } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { Container } from '@mui/material';

// Custom Components
import CardNav from './card-nav';
import ToDoNonEdit from './to-do-non-edit';
import ToDoEdit from './to-do-edit';

export default function NewToDo({item, modifyToDo, ACTIONS, is_complete}) {

    const [editing, setEditing] = useState(true)
    const [isNew, setIsNew] = useState(false)

    const [toDoContent, setToDoContent] = useState(item)

    useEffect(() => {
        if (!item.task) {
            setEditing(true)
            setIsNew(true)
        }
    }, [])

    function changeEdit() {
        if (editing) {
            modifyToDo({
            type: ACTIONS.UPDATE, 
            payload: {'content': toDoContent}
            })
        }
        setEditing(prevEdit => !prevEdit)
    }

    function updateContent(e) {
        const { name, value, id } = e.target;
        console.log(name, value, id)
        if (value) {
            setToDoContent((prevValue) => {
            return { ...prevValue, [name]: value };
            });
        } else {
            console.log("Hello")
            setToDoContent((prevValue) => {
            return { ...prevValue, [name]: id};
            });
        }
    }

    return(
        <>
         {editing ? <ToDoEdit item = {toDoContent} update = {updateContent} isNew = {isNew} changeEdit={changeEdit}/> : 
         <ToDoNonEdit item = {toDoContent} update = {updateContent} is_complete = {is_complete} changeEdit={changeEdit}/>}
        </>

    )
}