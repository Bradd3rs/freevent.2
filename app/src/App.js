import React, { Component } from 'react';
import axios from 'axios';
import { loadProgressBar } from 'axios-progress-bar';
import 'axios-progress-bar/dist/nprogress.css';
import styled from 'styled-components';

import Event from '../src/components/Event';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      distance: 1
    }
    this.updateEvents = this.updateEvents.bind(this);
  }
  componentWillMount() {

    loadProgressBar()

    axios.get('https://www.eventbriteapi.com/v3/events/search/?sort_by=date&location.address=london&location.within=1km&price=free&date_modified.keyword=today&token=UYTUUYJSUH7A2FIGGOSI')
    .then((res) => {
      console.log(res.data.events);
        this.setState(() => ({ data: res.data.events }))
    })
    .catch( (err) => {
        console.log(err);
    });
  }
  updateEvents() {
    let distance = this.state.distance + 1;
    
    axios.get(`https://www.eventbriteapi.com/v3/events/search/?sort_by=date&location.address=london&location.within=${distance}km&price=free&date_modified.keyword=today&token=UYTUUYJSUH7A2FIGGOSI`)
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
  render() {
    let data = this.state.data;
    return (
      <Container>
        <button onClick={this.updateEvents} type="button">distance +1km</button>
        <ul>
          {data.map((event, i) => {
            return (
              <Event data={event} />
            )
          })}
        </ul>
      </Container>
    );
  }
}

export default App;


const Container = styled.div`
`;