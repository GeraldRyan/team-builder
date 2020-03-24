import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';
import './Team.css';
import List from './List'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from '../node_modules/reactstrap'
import Form from './Form'


const Team = props =>
{

  const [team, setTeam] = useState(List)

  if (team.length === 0)
  {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div>
      <div>Hurray</div>


      <div id="cardholder">
        {team.map(element => (
          <Card>
          <div>Name: {`${element.fname} ${element.lname}`} </div>
          <div>Email: {element.email}</div>
          <div>Role: {element.role}</div>
          
          </Card>
          
      )
        )}
      </div>
      <Form></Form>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  )
}
export default Team




{/* <Card> */ }
{/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */ }
{/* <CardBody>
              <CardTitle>Card title</CardTitle>
              <div>First Name: {element.fname}</div>
              <div>Last Name: {element.fname}</div>
              <div>Interests: {element.fname}</div>
              <div>Score: {element.fname}</div>
              <CardText>Bio:</CardText>
              <Button>Add Member</Button>
            </CardBody> */}
{/* </Card> */ }