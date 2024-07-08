import Container from "react-bootstrap/esm/Container"
import Row from "react-bootstrap/esm/Row"
import ToDo from "./to-do"
import Col from 'react-bootstrap/esm/Col';

export default function ToDoDisplay({ToDoList}) {
    return (
       <Container>
        <Row>
            {ToDoList.map(todo => {
                return <Col xs = {4}><ToDo/></Col>
            })}
        </Row>
       </Container>
    )
}