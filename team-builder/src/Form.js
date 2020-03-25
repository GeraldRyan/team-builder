import React, { useState } from 'react'

const Form = props =>
{

  return (
    <div>


      <form onSubmit={props.onFormSubmit}>
        <h1>Hello</h1>

        <label htmlFor="">
          First Name
         <input name='fname' type="text" onChange={props.onInputChange} value={props.formValues.fname} />
        </label>
        <br />
        <label htmlFor="">
          Last name
        <input name='lname' type="text" onChandddddddge={props.onInputChange} value={props.formValues.lname} />
        </label>
        <br />
        <label htmlFor="">
          Email
          <input name='email' type="text" onChange={props.onInputChange} value={props.formValues.email} />
        </label>
        <br />
        <label htmlFor="">
          Role
        <input name='role' type="text" onChange={props.onInputChange} value={props.formValues.role} /><br /><br />

        </label>
        <input
          type='submit'
        />
      </form>


    </div>
  )
}


export default Form
