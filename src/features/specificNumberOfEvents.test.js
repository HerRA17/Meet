import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/specificNumberOfEvents.feature');

defineFeature(feature, test => {

    test('When user has not specified a number, 32 is the default number.', ({ given, when, then }) => {
        given('a blank number of events field', () => {

        });

        when('a user clicks search', () => {

        });

        then('show the default number of events to be displayed', () => {

        });
    });

    test('User can change the number of events they want to see.', ({ given, when, then }) => {
        given('user can change the number of events', () => {

        });

        when('the user types within the number box', () => {

        });

        then('the user should receive the provided amount of events', () => {

        });
    });

});