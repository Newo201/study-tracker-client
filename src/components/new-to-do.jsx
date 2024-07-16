// Standard Imports
import { useState, useEffect } from 'react';
// Custom Components
import ToDoNonEdit from './to-do-non-edit';
import ToDoEdit from './to-do-edit';

export default function NewToDo({item, modifyToDo, ACTIONS, is_complete}) {

    const [editing, setEditing] = useState(false)
    const [isNew, setIsNew] = useState(false)

    const [toDoContent, setToDoContent] = useState(item)

    // If we don't have a pre-specified task then the item has been created for the first time
    // Therefore we should set editing to true and is new to true
    useEffect(() => {
        if (!item.task) {
            setEditing(true)
            setIsNew(true)
        }
    }, [])

    // Toggle between editing and non-editing
    function changeEdit() {
        // We also need to update the content in the backend
        if (editing) {
            modifyToDo({
            type: ACTIONS.UPDATE, 
            payload: {'content': toDoContent}
            })
        }
        setEditing(prevEdit => !prevEdit)
    }

    // Update the state of the component when being edited
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
         {editing ? <ToDoEdit item = {toDoContent} update = {updateContent} 
         isNew = {isNew} changeEdit={changeEdit}/> : 
         <ToDoNonEdit item = {toDoContent} update = {updateContent} modifyToDo={modifyToDo}
         is_complete = {is_complete} changeEdit={changeEdit} ACTIONS = {ACTIONS}/>}
        </>

    )
}