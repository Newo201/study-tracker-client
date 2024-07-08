import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Selection from './selection';
import CardNav from './card-nav';
import Form from 'react-bootstrap/Form';
import { Container } from '@mui/material';
import { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const subjectList = ['English', 'Maths', 'Science']
const typeList = ['Lectures', 'Tutorials', 'Assignments']

export default function ToDo() {

  const [editing, setEditing] = useState(false)

  const [textContent, setTextContent] = useState("Enter your ToDo")

  function changeEdit() {
    setEditing(prevEdit => !prevEdit)
  }

  return (
    editing ?
    <Card>
      <Card.Body>
        {/* <Card.Title>ToDo</Card.Title>
        <Selection />
        <Selection /> */}
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows = {5} value = {textContent} onChange = {e => setTextContent(e.target.value)}/>
        </Form.Group>
        </Form>
        <CardNav subjectList={subjectList} typeList={typeList} editing = {editing} changeEdit = {changeEdit}/>
      </Card.Body>
    </Card>
    :
    <Card>
        <Card.Body>
        <h5>
            {textContent}
        </h5>
        <CardNav subjectList={subjectList} typeList={typeList} editing = {editing} changeEdit = {changeEdit}/>
        </Card.Body>
        <Container>
          <Row>
            <Col>
              <h2><MdDelete/></h2>
            </Col>
            <Col>
              <Button variant = "secondary" onClick = {changeEdit}>Edit</Button>
            </Col>
            <Col>
              <h2><FaCheck/></h2>
            </Col>
          </Row>
        </Container>
    </Card>
  );
}