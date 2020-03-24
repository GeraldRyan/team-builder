import React from 'react'


const Form = props =>
{

  return (
    <div>


      <form>
        <h1>Hello</h1>
        <p>Enter your name:</p>
        <input type="text"/>
        <p>Enter your email:</p>
        <input type="text"/>
        <p>Enter your role:</p>
        <input type="text"/><br/><br/>
        <input
        type='submit'
      />
      </form>


    </div>
  )
}


export default Form
