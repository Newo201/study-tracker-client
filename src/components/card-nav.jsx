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
      <Container>
          <Row style={{ width: '100%' }}>
              {/*First component determines what subject we choose*/}
              <Col xs = {4}>
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
              </Col>
              {/*Second Component is the update button which saves the ToDo component */}
              <Col xs = {4}>
                <Button variant="primary" onClick = {changeEdit}>Update</Button>
              </Col>
              {/*Third component determines what type we choose*/}
              <Col xs = {4}>
                <NavDropdown
                    id ="types"
                    title={currentChoices['Type']}
                    >
                    {typeList.map(type => {
                        return <NavDropdown.Item id = {type}
                        onClick = {e => handleChange(e, 'Type')}>{type}</NavDropdown.Item>
                    })}
                </NavDropdown>
              </Col>

          </Row>
      </Container>
    :
    <Container>
        <Row>
            <Col xs = {4}>
              <Navbar.Text>{currentChoices['Subject']}</Navbar.Text>
            </Col>
            <Col xs = {4}>
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