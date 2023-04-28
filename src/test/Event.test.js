import React from "react";
import { shallow } from "enzyme";
import Event from "../Event";
import { mockData } from "../MockData";

describe('<Event/> component', () => {
    let EventWrapper;
    beforeAll(() => {
        EventWrapper = shallow(<Event />);
    })
    test('check summary element collapsing by default', () => {
        expect(EventWrapper.find('.summary')).toHaveLength(2)
    });
    
    test('check start datetime element collapsing by default', () => {
        expect(EventWrapper.find('.startdatetime')).toHaveLength(1)
    });

    test('check timezone element collapsing by default', () => {
        expect(EventWrapper.find('.timezone')).toHaveLength(1)
    });

    test('check location element collapsing by default', () => {
        expect(EventWrapper.find('.location')).toHaveLength(1)
    });

    test('expand/hide an event to see its details', () => {
        EventWrapper.find('.detailsButton').at(0).simulate('click');
        expect(EventWrapper.find('.detailsButton')).toHaveLength(1);
    });
})
