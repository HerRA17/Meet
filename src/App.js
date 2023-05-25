import React, { Component } from "react";
import "./App.css";
import WelcomeScreen from "./WelcomeScreen";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import NumberOfEvents from "./NumberOfEvents";
import { WarningAlert } from "./Alert";
import { getEvents, extractLocations, checkToken, getAccessToken } from "./api";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import EventGenre from "./EventGenre";
import "./nprogress.css";


class App extends Component {
  constructor () {
    super();
  
  this.state = {
    events: [],
    locations: [],
    eventNumberResult: 32,
    selectedCity: null,
    infoText:'',
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

  getData = () =>{
    const {locations, events} = this.state;
    const data = locations.map((location) => {
      const number = events.filter((event) => event.location === location).length
      const city = location.split(', ').shift()
      return {city, number};
    });
    
    return data;
  };

  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem("access_token");
    let isTokenValid;
    if (accessToken && !navigator.onLine) {
      isTokenValid = true;
    } else {
      isTokenValid = (await checkToken(accessToken)).error ? false : true;
    }
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });
    if((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) })
        }

    if (navigator.onLine === false) {
          this.setState({ infoText: "You are offline! The data was loaded from the cache."});
        } else {
          this.setState({ infoText: "" });
        }  
      });
    }
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
        <h1>meet App</h1>
        <br/> 
        <WarningAlert text={this.infoText}/>
        <br/>

        <h3>City search:</h3>
        <CitySearch locations={this.state.locations} updateEvents={this.updateEvents}/>

        <h3>Number of Events:</h3>
        <NumberOfEvents 
        eventNumberResult={this.state.eventNumberResult}
        updateEventNumberResult={this.updateEventNumberResult}
        updateEvents={this.updateEvents}
        selectedCity={this.state.selectedCity}/>
        <br/>

        <h3>Events in the city</h3>
        <div className="data-vis-wrapper">
          <EventGenre events={this.state.events}/>
          <ResponsiveContainer height={400}>
            <ScatterChart
              margin={{top: 20, right: 20, bottom: 10, left: 10, }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="city" type="category" name="city" />
              <YAxis dataKey="number" type="category" name="number of events" allowDecimal={false} />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} />
              <Scatter data={this.getData()} fill="#8884d8" />
              <Scatter data={this.getData()} fill="#82ca9d" />
            </ScatterChart>
          </ResponsiveContainer>
        </div>

        <EventList events={this.state.events} md={6}/>
        <WelcomeScreen showWelcomeScreen={this.state.showWelcomeScreen} getAccessToken={() => { getAccessToken() }}/>
      </div>
    );
  }
}

export default App;