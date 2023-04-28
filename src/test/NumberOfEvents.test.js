import React from 'react';
import { shallow } from 'enzyme';
import { mockData } from '../MockData';
import NumberOfEvents from '../NumberOfEvents';

describe('<NumberOfEventsWrapper /> component', () => {
    let NumberOfEventsWrapper;
    beforeAll(() => {
        NumberOfEventsWrapper = shallow(<NumberOfEvents />);
    });

    test('test render text input', () => {
        expect(NumberOfEventsWrapper.find('.NumberOfEvents')).toHaveLength(1);
    });

    test('test change number of events', () => {
        const eventObject = { target: {value: '15'}};
        NumberOfEventsWrapper.find('.selectedNumberEvents').simulate('change', eventObject);
        expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe('15');
    });

    test('test default number of events', () => {
        expect(NumberOfEventsWrapper.state('numberOfEvents')).toBe('32');
    })
});