import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Team from './Team'


function App() {

  const [team, setTeam] = useState([])
  console.log("Team", team)

  return (
    <div className="App">
    <Team/>
    </div>
  );
}

export default App;
