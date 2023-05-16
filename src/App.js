import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { extractLocations, getEvents } from './api';
import './nprogress.css';

class App extends Component {
  constructor () {
    super();
  
  this.state = {
    events: [],
    locations: [],
    eventNumberResult: 32,
    selectedCity: null
  } 
}

  updateEvents = (location, eventNumberResult) => {
    
    if (!eventNumberResult) {
    getEvents().then((events) => {
      const locationEvents = (location === 'all') ?
      events :
      events.filter((event) => event.location === location);
      const shownEvents = locationEvents.slice(0, this.state.eventNumberResult)
      this.setState({ 
        events: shownEvents,
        selectedCity: location
      });
    });

    } else if (eventNumberResult && !location) {
      getEvents().then((events) => {
        const locationEvents = events.filter((event) => this.state.locations.includes(event.location));
        const shownEvents = locationEvents.slice(0, eventNumberResult)
        this.setState({ 
          events: shownEvents,
          eventNumberResult: eventNumberResult
        });
      });

    } else if (this.state.selectedCity === 'all') {
      getEvents().then((events) => {
        const locationEvents = events;
        const shownEvents = locationEvents.slice(0, eventNumberResult)
        this.setState({ 
          events: shownEvents,
          eventNumberResult: eventNumberResult
        });
      });

    } else {
      getEvents().then((events) => {
        const locationEvents = this.state.locations === 'all'
         ? events
         : events.filter((event) => this.state.selectedCity === event.location);
        const shownEvents = locationEvents.slice(0, eventNumberResult)
        this.setState({ 
          events: shownEvents,
          eventNumberResult: eventNumberResult
        });
      });
    }
  }

  componentDidMount() {
    this.mounted = true;
    getEvents(this.state.eventNumberResult).then((events) => {
      if (this.mounted){
        const shownEvents = events.slice(this.state.eventCount)
        this.setState({ events: shownEvents, locations: extractLocations(events) });
      }
    })
    .catch(e => console.error(e))
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  updateEventNumberResult = async (eventCount) => {
    this.setState({ eventNumberResult: eventCount});
    const events = await getEvents();
    const displayedEvents = events.slice(0, eventCount);
    this.setState({ events: displayedEvents});
  }


  render() {
    return (
      <div className="App">
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
        <NumberOfEvents 
        eventNumberResult={this.state.eventNumberResult}
        updateEventNumberResult={this.updateEventNumberResult}
        updateEvents={this.updateEvents}
        selectedCity={this.state.selectedCity}/>
        <EventList events={this.state.events}/>
        
      </div>
    );
  }
}

export default App;
