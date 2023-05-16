import React from 'react';
import { mount, shallow } from 'enzyme';
import { loadFeature, defineFeature } from 'jest-cucumber';
import { mockData } from '../MockData';
import App from '../App';
import CitySearch from '../CitySearch';
import Event from '../Event';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapse by default.', ({ given, when, then }) => {
        let AppWrapper, EventWrapper, CitySearchWrapper;
        beforeEach(() => {
            AppWrapper = mount(<App/>);
            EventWrapper = AppWrapper.find(Event);
            CitySearchWrapper = AppWrapper.find(CitySearch);
        })
        given('user has searched for a city', () => {
            CitySearchWrapper.find('.city').simulate('change', { target: { value: 'Berlin' } });
        });

        when('the events are listed', () => {
            ('suggestions li')
        });

        then('the event details should be collapsed by default', () => {
            expect(EventWrapper.find('.EventDetails')).toHaveLength(mockData.length);
        });
    });

    test('User can expand an event to see its details.', ({ given, when, then }) => {
        given('the city-search list is displayed', () => {

        });

        when('a user clicks on the details button', () => {
            EventWrapper.find('.detailsButton').simulate('change');
                    
        });

        then('the event details should expand displaying its details', () => {

        });
    });

    test('User can collapse an event to hide its details.', ({ given, when, then }) => {
        given('an event details are expanded', () => {

        });

        when('user clicks collapse button', () => {
            EventWrapper.find('.detailsButton').simulate('change');
        });

        then('the details should collapse within the specific event, hiding its details', () => {
            expect(EventWrapper.find('')).toHaveLength(mockData);
        });
    });
});