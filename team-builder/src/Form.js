import React, { useState } from 'react'


const Form = props =>
{

  const [formValues, setFormValues] = useState({
    fname: 'John',
    lname: 'Wick',
    email: '',
    role: ''
  })

  const onInputChange = event =>
  {
    // we are going to update app state with the new value of the input
    const inputThatChanged = event.target.name
    const newValueForInput = event.target.value
    setFormValues({
      ...formValues,
      [inputThatChanged]: newValueForInput,
    })
  }

  const onFormSubmit = event =>{
    event.preventDefault()
    const newTeamMember = {
      fname:formValues.fname,
      lname:formValues.lname,
      email:formValues.email,
      role:formValues.role
    }
    console.log('new team member:', newTeamMember)
    // setTeam([...team, newTeamMember])
  }

  return (
    <div>


      <form onSubmit={onFormSubmit}>
        <h1>Hello</h1>

        <label htmlFor="">
          First Name
         <input name='fname' type="text" onChange={onInputChange} value={formValues.fname} />
        </label>
        <br />
        <label htmlFor="">
          Last name
        <input name='lname' type="text" onChandddddddge={onInputChange} value={formValues.lname} />
        </label>
        <br />
        <label htmlFor="">
          Email
          <input name='email' type="text" onChange={onInputChange} value={formValues.email} />
        </label>
        <br />
        <label htmlFor="">
          Role
        <input name='role' type="text" onChange={onInputChange} value={formValues.role} /><br /><br />

        </label>
        <input
          type='submit'
        />
      </form>


    </div>
  )
}


export default Form
