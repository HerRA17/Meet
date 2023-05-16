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
        let AppWrapper;
        beforeEach(() => {
            const AppWrapper = mount(<App />);
            EventWrapper = AppWrapper.find(Event);
            CitySearchtWrapper = AppWrapper.find(CitySearch);
        })
        given('user has searched for a city', () => {
            CitySearchtWrapper.find('.CitySearch').simulate('change');
        });

        when('the events are listed', () => {
            // AppWrapper.find('.EventDetails');
        });

        then('the event details should be collapsed by default', () => {
            expect(EventWrapper.find('.EventDetails')).toHaveLength(mockData.length);
        });
    });

    test('User can expand an event to see its details.', ({ given, when, then }) => {
        given('the city-search list is displayed', () => {
            CitySearchtWrapper.find('.CitySearch');
        });

        when('a user clicks on the details button', () => {
            EventWrapper.find('.detailsButton').simulate('change');
                    
        });

        then('the event details should expand displaying its details', () => {
            expect(EventWrapper.find('showDetails')).toBe(true);
        });
    });

    test('User can collapse an event to hide its details.', ({ given, when, then }) => {
        given('an event details are expanded', () => {
            EventWrapper.find('showDetails').toBe(true);
        });

        when('user clicks collapse button', () => {
            EventWrapper.find('.detailsButton').simulate('change');
        });

        then('the details should collapse within the specific event, hiding its details', () => {
            expect(EventWrapper.find('showDetails')).toBe(false);
        });
    });
});