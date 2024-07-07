import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col';

export default function CardNav({subjectList, typeList, editing, changeEdit}) {

  const [currentChoices, setCurrentChoices] = useState({'Subject': 'Maths', 'Type': 'Lectures'})

  function handleChange(e, name) {
    const {id} = e.target
    setCurrentChoices(prevChoices => {
        return {...prevChoices, [name]: id}
    })
  }

  return (
    editing ?
    <Navbar expand="lg">
      <Container fluid>
        <div className = "justify-content-between align-items-between">
                <Nav style={{ width: '100%' }}>
                    <NavDropdown
                    id="subjects"
                    title={currentChoices['Subject']}
                    onChange = {e => console.log(e)}
                    >
                    {subjectList.map(subject => {
                        return <NavDropdown.Item id = {subject} 
                        onClick = {e => handleChange(e, 'Subject')}>{subject}</NavDropdown.Item>
                    })}
                    </NavDropdown>
                    <Button variant="primary" onClick = {changeEdit}>Update</Button>
                    <NavDropdown
                        id ="types"
                        title={currentChoices['Type']}
                        >
                        {typeList.map(type => {
                            return <NavDropdown.Item id = {type}
                            onClick = {e => handleChange(e, 'Type')}>{type}</NavDropdown.Item>
                        })}
                    </NavDropdown>
                </Nav>
        </div>
      </Container>
    </Navbar>
    :
    <Container>
        <Row>
            <Col xs = {4}>
              <Navbar.Text>{currentChoices['Subject']}</Navbar.Text>
            </Col>
            <Col xs = {4}>
              <Button variant="primary" onClick = {changeEdit}>Edit</Button>
            </Col>
            <Col xs = {4}>
              <Navbar.Text>{currentChoices['Type']}</Navbar.Text>
            </Col>
        </Row>
    </Container>

      // <Nav style={{ width: '100%' }}>
      
      //   <Navbar.Text>{currentChoices['Subject']}</Navbar.Text>
      //   <Button variant="primary" onClick = {changeEdit}>Edit</Button>
      //   <Navbar.Text>{currentChoices['Type']}</Navbar.Text>
      // </Nav>
    // </div>
    // </Container>

  );
}