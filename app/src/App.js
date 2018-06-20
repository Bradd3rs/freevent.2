import React, { Component } from 'react';
import axios from 'axios';

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
    axios.get('https://www.eventbriteapi.com/v3/events/search/?sort_by=date&location.address=plymouth&location.within=1km&price=free&token=UYTUUYJSUH7A2FIGGOSI')
    .then((res) => {
      console.log(res.data.events);
        this.setState(() => ({ data: res.data.events }))
    })
    .catch( (err) => {
        console.log(err);
    });
  }
  updateEvents() {
    let distance = this.state.distance + 10;
    console.log(distance);
    

    axios.get(`https://www.eventbriteapi.com/v3/events/search/?sort_by=date&location.address=plymouth&location.within=${distance}km&price=free&token=UYTUUYJSUH7A2FIGGOSI`)
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
      <div>
        <button onClick={this.updateEvents} type="button">distance +10km</button>
        <ul>
          {data.map((event, i) => {
            return (
              <li key={i}>{event.name.text}</li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;
