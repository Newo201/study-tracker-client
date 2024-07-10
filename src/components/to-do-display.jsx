import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import ToDo from "./to-do"
import Col from 'react-bootstrap/esm/Col';

const ToDoList = [
    {'task': 'Complete English Assignment', 'subject': 'English', 'study_type': 'Assignment'},
    {'task': 'Watch Maths Lecture', 'subject': 'Maths', 'study_type': 'Lecture'},
    {'task': 'Science Tutorial Prep', 'subject': 'Science', 'study_type': 'Tutorial'}
]

export default function ToDoDisplay() {

    // function addToDo(todo) {

    // }

    return (
       <Container>
        <Row>
            {ToDoList.map(todo => {
                return <Col xs = {4}><ToDo item = {todo}/></Col>
            })}
        </Row>
       </Container>
    )
}