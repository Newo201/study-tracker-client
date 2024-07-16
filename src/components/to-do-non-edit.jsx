import { Button, Card, Container, Row, Col } from "react-bootstrap";
import ToDoIcons from "./to-do-icons";
import CopyOnly from "./copy-only";

export default function ToDoNonEdit({is_complete, modifyToDo, ACTIONS, item, changeEdit}) {
    return (
        <Container >
        <Card>
            <Row className = "pt-2 py-4 px-5">
                <Col xs = {3} className = "d-flex justify-content-start align-items-start">
                    <Button className = "rounded-pill fs-6 fw-semibold text-uppercase">{item.subject}</Button>
                </Col>
            </Row>
            <Row className = "px-5">
                <p className = "text-start fs-4">{item.task}</p>
            </Row>
            <Row className = "px-5 pt-5">
                <p className = "text-start text-decoration-underline text-secondary opacity-50">Study Type</p>
                <p className = "text-start fs-5">{item.study_type}</p>
            </Row>
            {is_complete ? 
            <CopyOnly modifyToDo={modifyToDo} ACTIONS = {ACTIONS} item={item}/> : 
            <ToDoIcons modifyToDo={modifyToDo} ACTIONS = {ACTIONS} item={item} changeEdit={changeEdit}/>}
        </Card>
        </Container>
    )
}