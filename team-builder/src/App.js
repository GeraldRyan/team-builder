import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Team from './Team'
import List from './List'

function App()
{

  const [team, setTeam] = useState(List)

  const [formValues, setFormValues] = useState({
    fname: 'John',
    lname: 'Wick',
    email: '',
    role: ''
  })

  const onInputChange = event =>
  {
    // we are going to update app state with the new value of the input
    // Weird to be speaking of inputs when this calls team which calls form- we are so far removed from the form fields themselves yet we are creating these variables. 
    const inputThatChanged = event.target.name
    const newValueForInput = event.target.value
    setFormValues({
      ...formValues,
      [inputThatChanged]: newValueForInput,
    })
  }

  const onFormSubmit = event =>
  {
    event.preventDefault()
    const newTeamMember = {
      fname: formValues.fname,
      lname: formValues.lname,
      email: formValues.email,
      role: formValues.role
    }
    console.log('new team member:', newTeamMember)
    setTeam([...team, newTeamMember])
  }
  return (
    <div className="App">
      <Team
        team={team}
        onInputChange={onInputChange}
        formValues={formValues}
        onFormSubmit={onFormSubmit}

      />
    </div>
  );
}

export default App;
