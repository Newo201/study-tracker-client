import { NavDropdown } from "react-bootstrap"
import { useEffect } from "react"

export default function ToDoDropdown({name, update, choiceList, item}) {

    useEffect(() => {
        console.log(item)
    }, [item])

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