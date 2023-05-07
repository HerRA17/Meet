import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../MockData';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEventsWrapper /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents updateEvents={() => {}}/>);
    });
    
    test('should render text input', () => {
        expect(NumberOfEventsWrapper.find('.NumberOfEvents')).toHaveLength(1);
    });
    
    test('should default number of events', () => {
        expect(NumberOfEventsWrapper.state('eventNumberResult')).toBe(32);
    });
     
    test('should change number of events', () => {
        const eventObject = { target: {value: '15'}};
        NumberOfEventsWrapper.find('.selectedEventNumberResult').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('eventNumberResult')).toBe('15');
    });

});