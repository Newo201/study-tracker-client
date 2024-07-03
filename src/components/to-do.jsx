import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Selection from './selection';
import CardNav from './card-nav';
import Form from 'react-bootstrap/Form';
import { Container } from '@mui/material';
import { useState } from 'react';

const subjectList = ['English', 'Maths', 'Science']
const typeList = ['Lectures', 'Tutorials', 'Assignments']

export default function ToDo() {

  const [editing, setEditing] = useState(true)


  return (
    editing ?
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        {/* <Card.Title>ToDo</Card.Title>
        <Selection />
        <Selection /> */}
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} />
        </Form.Group>
        </Form>
        <CardNav subjectList={subjectList} typeList={typeList}/>
      </Card.Body>
    </Card>
    :
    <Card style={{ width: '18rem' }}>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
    </Card>
  );
}