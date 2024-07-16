import { NavDropdown } from "react-bootstrap"

export default function ToDoDropdown({name, update, choiceList, item}) {

    // A simple dropdown component for updating the subject or study type for the to-do
    return (
        <NavDropdown id={name} name={name} title={item[name]}>
        {choiceList.map(choice => {
            return (
            <NavDropdown.Item id = {choice} name = {name} 
            onClick = {e => update(e)}>{choice} </NavDropdown.Item>
            )
        })}
        </NavDropdown>
    )

}