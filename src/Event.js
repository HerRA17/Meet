import React, { Component } from "react";

class Event extends Component {
    constructor() {
        super();
        this.state = { showDetails: false}
        this.handleDetailClicked = (detail) => {
            this.setState({
                query: detail
            });
        }
    }
        
render() {
    const { event } = this.props; 
    const startDateTime = new Date(event.start.dateTime);
    const timeZone = event.start.timeZone;
    const location = event.location;
    const { showDetails } = this.state; 
    return (
            <div className="EventDetails">
                <h1 className="summary" >{event.summary}</h1>
                <p className="startdatetime-timezone" >Start:{startDateTime}, {timeZone}</p>
                <p className="summary-location" > @{event.summary} | {location}</p>
                <br/>
                <h3>About Event:</h3>
                <a className="">{htmllink}</a>
                <p className="">{description}</p>
                <br/><br/>
                <button className="buttonClick" onClick={() => this.handleDetailClicked(detail)}>Show details</button>
            </div>
           );
  }
}
export default Event;