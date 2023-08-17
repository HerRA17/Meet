# meet
## Table of Contents:
* [Overview](#overview)
* [Links](#links)
* [Key Features](#key_features)
* [Scenarios](#scenarios)
* [Technologies Used](#technologies_used)
* [Dependencies](#dependencies)
* [API](#api)
* [Google Verification](#google-verification)
* [Features](#features)
* [PWA enabled](#pwa_enabled)
* [Credits](#credits)

<a id="overview"></a>
## Overview-
Meet is a serverless, progressive web application (PWA) that displays events filtered by city and by number of events. It is developed using React, test driven development (TDD) and behavior driven development (BDD) techniques. The application uses the Google Calendar API to fetch events from a sample calendar account. The authorization process is handled by AWS Lambda functions. The app is capable to work offline with cached data.
The App benefited from FaaS due to the fast & easy Development, that it can be auto-Scalable, and Cost Efficiency. 
![Screenshot of Meet](/public/Meet.png)

<a id="links"></a>
## Links-
Hosted in Github [page](https://HerRA17.github.io/meet)

<a id="key_features"></a>
## Key Features-
Here are the app key features:

* Filter events by city.
* Show/hide event details.
* Specify number of events.
* Use the app when offline.
* Add an app shortcut to the home screen.
* View a chart showing the number of upcoming events by city. 

<a id="user_stories"></a>
## User Stories-
Key features correspond to the following user stories:

1. As a user, I would like to be able to filter events by city, so I can view the list of events that take place in a city.
2. As a user, I would like to be able to show/hide the event details, so I can see more/less details abount an event.
3. As a user, I would like to specify the number of events I can view in the app, so I can see more/less events in the event list at once.
4. As a user, I would like to be able to use the app when offline, so I see view the events I viewed the last time I was online
5. As a user, I would like to be able to add the app shortcut to the home screen, so I can open the app faster.
6. As a user, I would like to be able to see a chart showing the upcoming events in each city, so I know which events are organised in each city

<a id="scenarios"></a>
## Scanarios-
### Feature 1 - Filter events by city

Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
Given: the user hasn't searched for any city
When: the user opens the app
Then: the user should see a list of all upcoming events

Scenario 2: User should see a list of suggestions when they search for a city.
Given: the main page is open
When: the user start typing in the city textbox
Then: the user should see a list of city suggestions that matches what they've typed

Scenario 3: User can select a city from the suggested list.
Given: the user was typing "Be" in the city textbox and a list of city suggestions is showing
When: the user selects a city from the list (eg. Berlin)
Then: the user input should change into Berlin, the suggestions list should disappear, and the user should receive a list of upcoming events happening in Berlin

### Feature 2 - Show/hide event details

Scenario 1: An event element is collapsed by default
Given: the app displayed a list of events
When: the user does not interact with any event element
Then: the event element should be collapsed

Scenario 2: User can expand an event to see its details
Given: the app displayed a list of events
When: the user interacts with an event element (click/tap/select)
Then: the event element should expand to show the event details

Scenario 3: User can collapse an event to hide its details
Given: an event element is expanded
When: the user interacts with an event element (click/tap/select)
Then: the event element should collapse and hide its details

### Feature 3: Specify number of events

Scenario 1: When a user hasn't specified a number, 32 is the defaut number
Given: the user hasn't specified the number of events to display
When: the app displays a list of events
Then: the max number of events displayed at once by the app will be 32
Scenario 2: User can change the number of events they want to see
Given: the max number of events displayed at once in a list was 32
When: the user change the number of the events to display to 20
Then: the max number of events displayed at once in a list will be 20

### Feature 4: Use the app when offline

Scenario 1: Show cached data when there’s no internet connection
Given: the app has cashed a list of events for the city of Rome for the next week
When: the connection is offline and the user wants the app to display the list of events in Rome for the next week
Then: the app displays a list of the events in Rome using its cached data
Scenario 2: Show error when user changes the settings (city, time range)
Given: the app has cashed a list of events for the city of Rome for the next week
When: the connection is offline and the user wants the app to display the list of events in Paris for the next month
Then: the app will display an error message, stating that the request can't be satisfied without an internet connection

### Feature 5: Add an app shortcut to the home screen.
No testable scenarios.

### Feature 6: View a chart showing the number of upcoming events by city

Scenario 1: Show a chart with the number of upcoming events in each city
Given: the app is closed
When: the user opens the app
Then: the app displays a chart that shows the number of upcoming events for each city reflecting data fetched by the API

<a id="technologies_used"></a>
## Technologies Used-
**Frontend**
* Javascript/React
* Hosted in Github Pages

**Backend**
* Node/Express as Lambda functions (FaaS)
* hosted on AWS

<a id="dependencies"></a>
## Dependencies-
* "dependencies": {
  *  "@testing-library/jest-dom": "^5.16.2",
  *  "@testing-library/react": "^11.2.7",
  *  "@testing-library/user-event": "^12.8.3",
  *  "atatus-spa": "^4.5.0",
  *  "axios": "^1.4.0",
  *  "bootstrap": "^5.2.3",
  *  "nprogress": "^0.2.0",
  *  "react": "^17.0.2",
  *  "react-bootstrap": "^2.7.4",
  *  "react-dom": "^17.0.2",
  *  "react-scripts": "5.0.1",
  *  "web-vitals": "^2.1.4",
  *  "workbox-background-sync": "^6.5.4",
  *  "workbox-broadcast-update": "^6.5.4",
  *  "workbox-cacheable-response": "^6.5.4",
  *  "workbox-core": "^6.5.4",
  *  "workbox-expiration": "^6.5.4",
  *  "workbox-google-analytics": "^6.5.4",
  *  "workbox-navigation-preload": "^6.5.4",
  *  "workbox-precaching": "^6.5.4",
  *  "workbox-range-requests": "^6.5.4",
  *  "workbox-routing": "^6.5.4",
  *  "workbox-strategies": "^6.5.4",
  *  "workbox-streams": "^6.5.4"
  },
  * "devDependencies": {
    * "@wojtekmaj/enzyme-adapter-react-17": "^0.8.0",
    * "concurrently": "^8.0.1",
    * "enzyme": "^3.11.0",
    * "gh-pages": "^5.0.0",
    * "jest-cucumber": "^3.0.1",
    * "puppeteer": "^18.1.0",
    * "puppeteer-core": "^19.9.1"
  },
  * "jest": {
   * "transformIgnorePatterns": [
    *  "node_modules/(?!(react-leaflet|@react-leaflet|d3-*|axios))"
    ],
    * "moduleNameMapper": {
    *  "axios": "axios/dist/node/axios.cjs"
    }
  }

<a id="api"></a>
## API-
Google Calendar API. 

<a id="google-verification"></a>
## Google Verification-
The app is currently undergoing the verification process with Google to allow unrestricted public access. During this verification process, users are advised to exercise caution. However, as the developer (hermann.rasch@gmail.com), I assure you that the app is safe and trustworthy. Please feel free to trust the developer and proceed to use the app with confidence. If you have any concerns or questions, please don't hesitate to reach out to me directly at hermann.rasch@gmail.com. Thank you for your understanding and support.

<a id="pwa_enabled"></a>
## PWA enabled-
Meet App is fully compliant with the PWA specifications. The app can be installed on desktops and mobile devices and is capable to work offline with cached data.

<a id="credits"></a>
## Credits
Tutor: Adewunmi bamishigbin
Mentor: Joel Cross