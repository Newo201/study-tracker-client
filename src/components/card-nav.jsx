import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/esm/Button';
import { useState } from 'react';

export default function CardNav({subjectList, typeList}) {

  const [currentChoices, setCurrentChoices] = useState({'Subject': 'Maths', 'Type': 'Lectures'})

  function handleChange(e, name) {
    const {id} = e.target
    setCurrentChoices(prevChoices => {
        return {...prevChoices, [name]: id}
    })
  }

  return (
    <Navbar expand="lg">
      <Container fluid>
        <div className = "justify-content-between align-items-between">
            <Navbar.Collapse id="subject-dropdown">
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
                    <Button variant="primary">Edit</Button>
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
                </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
}