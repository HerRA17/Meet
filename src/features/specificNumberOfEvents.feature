Feature: specific number of events

Scenario: When user has not specified a number, 32 is the default number.
Given a blank number of events field
When a user clicks search
Then show the default number of events to be displayed

Scenario: User can change the number of events they want to see.
Given user can change the number of events
When the user types within the number box
Then the user should receive the provided amount of events