import React, { Component } from "react";

class Event extends Component {
    constructor () {
        super();

    this.state = { showDetails: false }

        handleDetailsClicked = () => {
            this.setState((prevState) => ({
                showDetails: !prevState.showDetails
                }))
            };
        }
render() {
    // const { event } = this.props; 
    // const startDateTime = new Date(event.start.dateTime);
    // const timeZone = event.start.timeZone;
    // const location = event.location;
    // const summary = event.summary;
    
    return (
            <div className="EventDetails">
                <h1 className="summary" >This will be summary</h1>
                <p className="startdatetime" >Start: This will be startDateTime</p>
                <p className="timezone">This will be timeZone</p>
                <p className="summary" > This will be summary</p>
                <p className="location"> This will be location</p>
                <br/>
                {/* {!showDetails && (
                <>
                    <h3>About Event:</h3>
                    <a className="htmlLink">this will be html-link</a>
                    <p className="description">this will be description</p>
                </>
                    )} */}
                    <br/><br/>
                <button className="detailsButton" onClick={this.handleDetailsClicked()}>Show details</button>
                
            </div> 
           );
  }
}
export default Event;