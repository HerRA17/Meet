import React, { Component } from "react";
import "./App.css";
import WelcomeScreen from "./WelcomeScreen";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { getEvents, extractLocations, checkToken, getAccessToken } from "./api";
import "./nprogress.css";
import ThemeProvider from "react-bootstrap/ThemeProvider";

class App extends Component {
  constructor () {
    super();
  
  this.state = {
    events: [],
    locations: [],
    eventNumberResult: 32,
    selectedCity: null,
    showWelcomeScreen: undefined
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

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem("access_token");
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) })
        }
      });
    }
    // getEvents(this.state.eventNumberResult).then((events) => {
    //   if (this.mounted){
    //     const shownEvents = events.slice(this.state.eventCount)
    //     this.setState({ events: shownEvents, locations: extractLocations(events) });
    //   }
    // })
    // .catch(e => console.error(e))
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
    if(this.state.showWelcomeScreen === undefined) return <div className="App" />
    return (
      <div className="App">
        <ThemeProvider breakpoints={["xxl","xl","lg","md","sm","xs"]}
        minBreakpoint="xs">
        <h1>meet App</h1>
        <br/>
        <h3>City search:</h3>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>
        <h3>Number of Events:</h3>
        <NumberOfEvents 
        eventNumberResult={this.state.eventNumberResult}
        updateEventNumberResult={this.updateEventNumberResult}
        updateEvents={this.updateEvents}
        selectedCity={this.state.selectedCity}/>
        <EventList events={this.state.events} md={6}/>
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }}/>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
