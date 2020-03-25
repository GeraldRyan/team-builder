import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';
import shamrock from './shamrock.svg'
import './Team.css';
import List from './List'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from '../node_modules/reactstrap'
import Form from './Form'
import {  Carousel,  CarouselItem,  CarouselControl,  CarouselIndicators,  CarouselCaption} from 'reactstrap';

const Team = props =>
{
  if (props.team.length === 0)
  {
    return (
      <div>Loading...</div>
    )
  }
  return (
    <div>
      <h1>Hello</h1>
      <Form
        onInputChange={props.onInputChange}
        formValues={props.formValues}
        onFormSubmit={props.onFormSubmit}
      />

      <div class="grid-parent">
        {props.team.map(element => (

          <Card>
            <CardBody>
            <div>Name: {`${element.fname} ${element.lname}`} </div>
            <div>Email: {element.email}</div>
            <div>Role: {element.role}</div>
            </CardBody>
          </Card>

          
        //   <Carousel
        //   activeIndex={activeIndex}
        //   next={next}
        //   previous={previous}
        // >
        //   <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        //   {slides}
        //   <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        //   <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        // </Carousel>
        )
        )}
      </div>
<br/>
<br/>
      <img src={shamrock} className="App-logo" alt="logo" />
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