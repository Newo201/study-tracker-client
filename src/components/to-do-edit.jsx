import { Button, Card, Container, Row, Col, Form } from "react-bootstrap";
import ToDoDropdown from "./to-do-dropdown"

const subjectList = ['English', 'Maths', 'Science']
const typeList = ['Lectures', 'Tutorials', 'Assignments']

export default function ToDoEdit({update, item, isNew, changeEdit}) {
    return (
        <Container >
        <Card>
            <Row className = "pt-2 py-4 px-5">
                <Col xs = {3} className = "d-flex justify-content-start align-items-start">
                    <Button className = "rounded-pill fs-6 fw-semibold text-uppercase">
                        <ToDoDropdown name = "subject" update = {update} item = {item} choiceList = {subjectList} />
                    </Button>
                </Col>
            </Row>
            <Row className = "px-5">
                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control as="textarea" name = "task" rows = {5} value = {item.task} onChange = {e => update(e)}/>
                    </Form.Group>
                </Form>
            </Row>
            <Row className = "px-5 pt-5">
                <p className = "text-start text-decoration-underline text-secondary opacity-50">Study Type</p>
                <p className = "text-start fs-5">
                    <ToDoDropdown name = "study_type" update = {update} item = {item} choiceList = {typeList}/>
                </p>
            </Row>
            <Row className = "pt-2 py-4 px-5"> 
                <Col xs = {3} className = "d-flex justify-content-start align-items-start">
                    <Button className = "rounded-pill fs-5 fw-semibold" variant="success" onClick = {changeEdit}>{isNew ? "Create" : "Update"}</Button>
                </Col>
            </Row>
        </Card>
        </Container>
    )
}