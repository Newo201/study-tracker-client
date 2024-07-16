import { Button, Card, Container, Row, Col } from "react-bootstrap";
import ToDoIcons from "./to-do-icons";
import CopyOnly from "./copy-only";

export default function ToDoNonEdit({is_complete, modifyToDo, ACTIONS, item, changeEdit}) {
    return (
        <Container className = "h-100">
        <Card className = "h-100">
            <Row className = "pt-2 py-4 px-3">
                <Col xs = {3} className = "d-flex justify-content-start align-items-start">
                    <Button className = "rounded-pill fs-6 fw-semibold text-uppercase">{item.subject}</Button>
                </Col>
            </Row>
            <Row className = "px-3">
                <p className = "text-start fs-4 control-height">{item.task}</p>
            </Row>
            <Row className = "px-3">
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