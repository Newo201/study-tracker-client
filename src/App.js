import { useEffect } from 'react';
import './App.css';
import Dashboard from './components/dashboard';
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css'
import DateFilter from './components/date-filter';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import DashboardDisplay from './pages/dashboard-display';
import ToDo from './components/to-do';
import ToDoDisplay from './components/to-do-display';
import Test from './components/to-do-non-edit';
import { Col, Container, Row } from 'react-bootstrap';
import ToDoNonEdit from './components/to-do-non-edit';
import ToDoEdit from './components/to-do-edit';
import NewToDo from './components/new-to-do';
// import ChartLine from './components/line-chart';
// import ChartPie from './components/pie-chart';
// import ChartStack from './components/stacked-chart';

let ToDoList = [
  {'id': 1, 'task': 'Complete English Assignment', 'subject': 'English', 'study_type': 'Assignment'},
  {'id': 2, 'task': 'Watch Maths Lecture', 'subject': 'Maths', 'study_type': 'Lecture'},
  {'id': 3, 'task': 'Science Tutorial Prep', 'subject': 'Science', 'study_type': 'Tutorial'}
]

function App() {

  return (
    <div className="App">
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DashboardDisplay />
      </LocalizationProvider> */}
      {/* <ToDoDisplay ToDoList={[1,2,3]}/> */}
      <Container />
      <Row>
        <Col xs = {4}>
          <NewToDo item = {ToDoList[0]}/>
        </Col>
      </Row>



    </div>
  );
}

export default App;
