import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component{
    constructor() {
        super();
        this.state = {
            eventNumberResult: 32,
            infoText: ''
        }
    }

    
    handleInputChanged = (eventNumberResult) => {
        const value = eventNumberResult.target.value; 
        if (value >= 1 || value <= 32) {
        this.setState({
            eventNumberResult: value,
        })
        this.props.updateEvents(this.props.selectedCity, value)    
        } else {
            this.setState({
                infoText: 'The number of event you chosed is not valid. Please use a value between 1 and 32.'
            })
        }
    }

render() {
    return(
        <div className='NumberOfEvents'>
            <ErrorAlert text={this.state.infoText}/>
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