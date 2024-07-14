import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Selection from './selection';
import CardNav from './card-nav';
import Form from 'react-bootstrap/Form';
import { Container } from '@mui/material';
import { useState, useEffect } from 'react';
import { MdDelete } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

const subjectList = ['English', 'Maths', 'Science']
const typeList = ['Lectures', 'Tutorials', 'Assignments']

export default function ToDo({item, updateToDo, addToDo, deleteToDo, completeToDo}) {

  const [editing, setEditing] = useState(false)
  const [isNew, setIsNew] = useState(false)

  const [toDoContent, setToDoContent] = useState(item)

  useEffect(() => {
    if (!item.task) {
      setEditing(true)
      setIsNew(true)
    }
  }, [])

  function changeEdit() {
    if (editing) {
      updateToDo(toDoContent)
    }
    setEditing(prevEdit => !prevEdit)
  }

  // function createToDo() {
  //   addToDo(toDoContent)
  //   setEditing(false)
  //   setIsNew(false)
  // }

  function updateContent(e) {
    const { name, value, id } = e.target;
    console.log(name, value, id)
    if (value) {
      setToDoContent((prevValue) => {
        return { ...prevValue, [name]: value };
      });
    } else {
      console.log("Hello")
      setToDoContent((prevValue) => {
        return { ...prevValue, [name]: id};
      });
    }
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
            <Form.Control as="textarea" name = "task" rows = {5} value = {toDoContent.task} onChange = {e => updateContent(e)}/>
        </Form.Group>
        </Form>
        <CardNav subjectList={subjectList} typeList={typeList} editing = {editing} 
        changeEdit = {changeEdit} item = {toDoContent} update = {updateContent} isNew = {isNew}/>
      </Card.Body>
    </Card>
    :
    <Card>
        <Card.Body>
        <h5>
          {toDoContent.task}
        </h5>
        <CardNav subjectList={subjectList} typeList={typeList} editing = {editing} 
        changeEdit = {changeEdit} item = {toDoContent} update = {updateContent} isNew = {isNew}/>
        </Card.Body>
        <Container>
          <Row>
            <Col>
              <h2><MdDelete onClick = {() => deleteToDo(toDoContent)}/></h2>
            </Col>
            <Col>
              <Button variant = "secondary" onClick = {changeEdit}>Edit</Button>
            </Col>
            <Col>
              <h2><FaCheck onClick = {() => completeToDo(toDoContent)}/></h2>
            </Col>
          </Row>
        </Container>
    </Card>
  );
}