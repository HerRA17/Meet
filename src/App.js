import React, { Component } from 'react';
import './App.css';
import EventList from './Eventlist';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import './nprogress.css';

class App extends Component {
  constructor () {
    super();
  
  this.state = {
    events: [],
    locations: []
  } 

  this.updateEvents = (location) => {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
      events :
      events.filter((event) => event.location === location);
      this.setState({ 
        events: locationEvents
      });
    });
  }

  componentDidMount() {
    this.mounted = true;
    getEvents().then((events) => {
      if (this.mounted){
        this.setState({ events, locations: extractLocations(events) });
      }
    })
    .catch(e => console.error(e))
  }

  componentWillUnmount() {
    this.mounted = false;
  }
}

  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
        <EventList events={this.state.events}/>
        <NumberOfEvents />
      </div>
    );
  }
}

export default App;
