import React, { Component } from 'react';
class NumberOfEvents extends Component{
    constructor() {
        super();
        this.state = {
            eventNumberResult: 32
        }
    }

    handleInputChanged = (eventNumberResult) => {
        const value = eventNumberResult.target.value; 
        if (value >= 1 || value <= 32) {
        this.setState({
            eventNumberResult: value,
        })
        this.props.updateEvents(this.props.selectedCity, value)    
    }
    }

render() {
    return(
        <div className='NumberOfEvents'>
            <input 
            input='number'
             className='selectedEventNumberResult'
             value={this.state.eventNumberResult}
             onChange={this.handleInputChanged}
             placeholder='Enter the amount of events'/>
        </div>
    )
}

}

export default NumberOfEvents;