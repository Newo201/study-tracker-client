import { Container } from "@mui/material"
import { CiCirclePlus } from "react-icons/ci"
import Row from "react-bootstrap/esm/Row"
import Col from "react-bootstrap/esm/Col"

export default function ToDoHeader({initToDo}) {
    return (
        <Container className = "py-3">
            <Row>
                <Col className = "d-flex justify-content-start">
                <h1>Study to Complete</h1>
                </Col>
                <Col className = "d-flex justify-content-end">
                <h1><CiCirclePlus onClick = {initToDo}/></h1>
                </Col>
            </Row>
        </Container>
    )
}