import { Button, Card, Container, Row, Col } from "react-bootstrap";
import ToDoIcons from "./to-do-icons";

export default function Test() {
    return (
        <Container >
        <Card>
            <Row className = "pt-2 py-4 px-5">
                <Col xs = {3} className = "d-flex justify-content-start align-items-start">
                    <Button className = "rounded-pill fs-6 fw-semibold text-uppercase">Maths</Button>
                </Col>
            </Row>
            <Row className = "px-5">
                <p className = "text-start fs-4">Complete This To Do</p>
            </Row>
            <Row className = "px-5 pt-5">
                <p className = "text-start text-decoration-underline text-secondary opacity-50">Study Type</p>
                <p className = "text-start fs-5">Lectures</p>
            </Row>
            <ToDoIcons />
        </Card>
        </Container>
    )
}