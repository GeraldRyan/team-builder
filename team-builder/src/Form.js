import React, { useState } from 'react'
import { Button, Form as RSForm, FormGroup, Label, Input, FormText } from 'reactstrap';

const Form = props =>
{

  return (


    <RSForm class='rsform'>

      <form class='myform' onSubmit={props.onFormSubmit}>

        <div className="form-container">
          <FormGroup >
            <Label htmlFor="Label"> First Name</Label>
            <input name='fname' type="text" onChange={props.onInputChange} value={props.formValues.fname}
              placeholder="John" />
          </FormGroup>
    

          <FormGroup>
            <Label htmlFor="">Last Name</Label>
            <input name='lname' type="text" onChandddddddge={props.onInputChange} value={props.formValues.lname} placeholder="Wick" />
          </FormGroup>
       
          <FormGroup>
            <Label htmlFor="">Email</Label>
            <input name='email' type="text" onChange={props.onInputChange} value={props.formValues.email} />
          </FormGroup>

          
          <FormGroup>
            <Label htmlFor="Roles">Role</Label>
            <input name='role' type="text" onChange={props.onInputChange} value={props.formValues.role} /><br /><br />
          </FormGroup>
        </div>
        <input
          type='submit'
        />
        <br/>
        <br/>
      </form>

    </RSForm>

  )
}


export default Form
