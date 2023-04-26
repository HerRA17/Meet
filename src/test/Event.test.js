import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../MockData";

describe('<Event/> component', () => {
    // let Event;
    // beforeAll(() => {
    //     EventWrapper = shallow(<Event />);
    // })
    test('check summary element collapsing by default', () => {
        const EventWrapper = shallow(<Event  />);
        expect(Event.find('.summary').prop('text')).toBe(mockData)
    });
    
    test('check start datetime element collapsing by default', () => {
        const EventWrapper = shallow(<Event  />);
        expect(Event.find('.startdatetime-timezone').prop('text').toBe(mockData))
    });

    test('check timezone element collapsing by default', () => {
        const EventWrapper = shallow(<Event  />);
        expect(Event.find('.summary-location').prop('text').toBe(mockData))
    });

    
    test('expand an event to see its details', () => {
        const EventWrapper = shallow(<Event  />);
        EventWrapper.setState({ false });
        EventWrapper.('.buttonClick').simulate('click');
        expect(Event.state('true').toBe(true))
    });
})
// default- summary, Location, time zone, date time
// required all from default + description, summary, link to more details in Google Calendar, HTML-link