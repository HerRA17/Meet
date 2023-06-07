import React, { Component } from "react";

class Event extends Component {
    constructor () {
        super();

    this.state = { showDetails: false }
    }

    handleDetailsClicked = () => {
        this.setState((prevState) => ({
            showDetails: !prevState.showDetails
            }))
        };

render() {
    const { event } = this.props; 
    const { showDetails } = this.state;
    return (
            <div className="EventDetails">
                <h1 className="summary" >{event.summary} </h1>
                <p className="startdatetime" >Start: {new Date(event.start.dateTime).toLocaleString()}</p>
                <p className="timezone">{event.timeZone}</p>
                <p className="location"> {event.location}</p>
                <br/>
                {showDetails && (
                <div className="hiddenDetails">
                    <h3>About Event:</h3>
                    <a className="htmlLink" href={event.htmlLink}>Click here to see details on Google Calendar </a>
                    <p className="description">{event.description}</p>
                </div>
                    )}
                    <br/>
                <button className="detailsButton" onClick={this.handleDetailsClicked}>
                    {showDetails ? 'Hide Details' : 'Show Details'}
                </button>
            </div> 
           );
  }
}
export default Event;