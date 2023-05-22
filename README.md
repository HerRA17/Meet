# meet
## Table of Contents:
* [Overview](#overview)
* [Links](#links)
* [Process](#process)
* [Technologies Used](#technologies_used)
* [Dependencies](#dependencies)
* [API](#api)
* [Features](#features)
* [Credits](#credits)

## Overview-
meet is a serverless and Progressive web application which will allow users to find events within certain cities. 
The serverless function will allow user to use the app without connection, ...

## Links-
hosted in Github [page](https://HerRA17.github.io/meet)
## Process-
TDD technique
## Technologies Used-
**Frontend**
* Javascript/React
* Hosted in Github Pages

**Backend**
* Node/Express as Lambda functions (FaaS)
* hosted on AWS
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
## API-
Google Calendar API
## Features-
Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.
Given user hasn’t searched for any city.
When the user opens the app.
Then the user should see a list of all upcoming events.

Scenario 2: User should see a list of suggestions when they search for a city.
Given the main page is open.
When user starts typing in the city textbox.
Then the user should see a list of cities (suggestions) that match what they’ve typed.

Scenario 3: User can select a city from the suggested list.
Given the user was typing “Berlin” in the city textbox.
And the list of suggested cities is showing.
When the user selects a city (e.g., “Berlin, Germany”) from the list.
Then their city should be changed to that city (i.e., “Berlin, Germany”).
And the user should receive a list of upcoming events in that city.
## Credits-
