import React from 'react';
import { mount, shallow } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mockData } from '../MockData';
import App from '../App';
import CitySearch from '../CitySearch';
import NumberOfEvents from '../NumberOfEvents';

const feature = loadFeature('./src/features/specificNumberOfEvents.feature');

defineFeature(feature, test => {
    // let AppWrapper;
    //     beforeEach(() => {
    //         const AppWrapper = mount(<App />);
    //         NumberOfEventsWrapper = AppWrapper.find(NumberOfEvents);
    //         CitySearchtWrapper = AppWrapper.find(CitySearch); 
    //     })
    test('When user has not specified a number, 32 is the default number.', ({ given, when, then }) => {
        
        })
        given('a blank number of events field', () => {
            });

        when('a user clicks search', () => {
            NumberOfEventsWrapper.find('.selectedEventNumberResult').simulate('change'); 
        });

        then('show the default number of events to be displayed', () => {
            expect(NumberOfEventsWrapper.state('eventNumberResult')).toBe(32);
        });
    });

    test('User can change the number of events they want to see.', ({ given, when, then }) => {
        given('user can change the number of events', async () => {
            
        });

        when('the user types within the number box', () => {
            NumberOfEventsWrapper.find('.selectedEventNumberResult').simulate('change', {target: { value:2 }});
        });

        then('the user should receive the provided amount of events', () => {
            expect(NumberOfEventsWrapper.state('eventNumberResult')).toBe(2);
        });
    });