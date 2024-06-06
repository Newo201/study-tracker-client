import { useEffect } from 'react';
import './App.css';
import Dashboard from './components/dashboard';
import axios from "axios"
// import ChartLine from './components/line-chart';
// import ChartPie from './components/pie-chart';
// import ChartStack from './components/stacked-chart';

function App() {

  return (
    <div className="App">
      <Dashboard />
    </div>
  );
}

export default App;
