import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';
import './Team.css';
import List from './List'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from '../node_modules/reactstrap'

const Team = props =>
{

  const [team, setTeam] = useState([List])
  console.log("Team", team)

  if (team === [])
  {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div>
      <div>Hurray</div>
      {team.map(element => (
        <div id="cardholder">

          <Card>
            {/* <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" /> */}
            {/* <CardBody>
              <CardTitle>Card title</CardTitle>
              <div>First Name: {element.fname}</div>
              <div>Last Name: {element.fname}</div>
              <div>Interests: {element.fname}</div>
              <div>Score: {element.fname}</div>
              <CardText>Bio:</CardText>
              <Button>Add Member</Button>
            </CardBody> */}
          </Card>

              <div>First Name: {element.fname}</div>
              <div>Last Name: {element.fname}</div>
              <div>Interests: {element.fname}</div>
              <div>Score: {element.fname}</div>
        </div>
      )
      )}
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  )
}
export default Team