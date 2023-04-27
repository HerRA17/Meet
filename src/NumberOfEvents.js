import React, { Component } from 'react';
class NumberOfEvents extends Component{
    constructor() {
        super();
        this.state = {
            numberOfEvents: 32
        }

        this.handleInputChanged = (eventamout) => {
            const value = eventamout.target.value; 
            this.setState({
                numberOfEvents: value,
            })
        }
    }
render() {
    return(
        <div className='NumberOfEvents'>
            <input 
            input='number'
             className='selectedNumberEvents'
             value={this.state.numberOfEvents}
             placeholder='Enter the amount of events'/>
        </div>
    )
}

}

export default NumberOfEvents;