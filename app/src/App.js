import React, { Component } from 'react';
import axios from 'axios';
import { loadProgressBar } from 'axios-progress-bar';
import 'axios-progress-bar/dist/nprogress.css';
import styled from 'styled-components';

import Event from '../src/components/Event';
import EventDetail from './components/EventDetail';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      distance: 1,
      details: false,
      event: null
    }
    this.updateEvents = this.updateEvents.bind(this);
    this.viewEvent = this.viewEvent.bind(this);
    this.closeEvent = this.closeEvent.bind(this);
  }
  componentDidMount() {

    loadProgressBar()

    axios.get('https://www.eventbriteapi.com/v3/events/search/?sort_by=date&location.address=london&location.within=1km&price=free&start_date.keyword=today&date_modified.keyword=today&token=UYTUUYJSUH7A2FIGGOSI')
    .then((res) => {
      console.log(res.data.events);
      console.log(res.data.events.length);
        this.setState(() => ({ data: res.data.events }))
    })
    .catch( (err) => {
        console.log(err);
    });
  }
  updateEvents() {
    let distance = this.state.distance + 1;
    
    axios.get(`https://www.eventbriteapi.com/v3/events/search/?sort_by=date&location.address=london&location.within=${distance}km&price=free&start_date.keyword=today&date_modified.keyword=today&token=UYTUUYJSUH7A2FIGGOSI`)
    .then((res) => {
      console.log(res.data.events);
        this.setState(() => (
          { 
            data: res.data.events,
            distance: distance
          }
        ))
    })
    .catch( (err) => {
        console.log(err);
    });
  }
  viewEvent(event) {
    console.log(event)
    console.log(this.state.event)
    this.setState(() => (
      { 
        details: true,
        event
      }
    ))
  }
  closeEvent(event) {
    console.log(event)
    this.setState(() => (
      { 
        details: false,
        event: null
      }
    ))
  }
  render() {

    let data = this.state.data;

    if(this.state.event) {

      return <EventDetail onClick={this.closeEvent} event={this.state.event} />

    } else {

      return (

        <Container>
          <button onClick={this.updateEvents} type="button">distance +1km</button>
          <ul>
            {data.map((event, i) => {
              return (
                <Event key={i} data={event} onClick={this.viewEvent} />
              )
            })}
          </ul>
        </Container>
      );
    }
  }
}

export default App;


const Container = styled.div`
  text-align: center;
`;