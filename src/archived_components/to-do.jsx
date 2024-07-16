// Standard Imports
import { useState, useEffect } from 'react';
import axios from 'axios';

// Styling Components
import {Card, Form, Row, Col} from "react-bootstrap"
import { MdDelete } from "react-icons/md";
import { FaCheck, FaRegCopy } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { Container } from '@mui/material';

// Custom Components
import CardNav from './card-nav';

// Replace with a database query eventually
const subjectList = ['English', 'Maths', 'Science']
const typeList = ['Lectures', 'Tutorials', 'Assignments']

export default function ToDo({item, modifyToDo, ACTIONS}) {

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
      modifyToDo({
        type: ACTIONS.UPDATE, 
        payload: {'content': toDoContent}
      })
    }
    setEditing(prevEdit => !prevEdit)
  }

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
              <h2>
                <MdDelete onClick = {() => {
                  modifyToDo({
                    type: ACTIONS.DELETE,
                    payload: {'content': toDoContent}
                  })
                }}/>
              </h2>
            </Col>
            <Col>
              <h2>
                <FaRegCopy onClick = {() => {
                  axios.post(`/study/duplicate/${toDoContent.id}`).then(res => {
                    modifyToDo({
                      type: ACTIONS.INIT,
                      payload: {'newToDo': res.data}
                    })
                  })
   
                  }}/>
              </h2>
            </Col>
            <Col>
              <h2><CiEdit onClick = {changeEdit} /></h2>
            </Col>
            <Col>
              <h2>
                <FaCheck onClick = {() => {
                  modifyToDo({
                    type: ACTIONS.COMPLETE,
                    payload: {'content': toDoContent}
                  })
                }}/>
              </h2>
            </Col>
          </Row>
        </Container>
    </Card>
  );
}