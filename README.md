# Weather App

Uses the MetaWeather API to show the weather for a location

## Assignment Instructions
* Please read all instructions before beginning the assignment
* This assignment must be completed as a web application using Javascript and HTML
* We recommend using React (we included tooling to make this easier).
You are free, however, to select any framework you are comfortable with, or none at all.
* Clone this repo. **Do not commit, branch, or fork this repo.**
* The goal of this assignment is to create a simple weather web app using the metaweather Apis
* For the weather data, use the following hardcoded URL: https://www.metaweather.com/api/location/2367105/
* The app does not need to be interactive. When the page loads, it should query the weather API for Boston's weather.
The minimum and maximum temperature for the day should be displayed, as well as an icon for the weather and the location.
* We expect this assignment will take around 1-3 hours. You have **24 hours** from receipt of the assignment to submit your solution to us.
* Please follow the following mockup as a guide:

![Mockup](images/mockup.png?raw=true "Mockup")
* Submit your assignment by uploading the completed contents to your own private
    repo and giving access to the interview team.

## Setup

```bash
git clone git@github.com:brightcove/apps-interview.git
cd apps-interview
npm install
npm start

# visit http://localhost:8080 for sandbox
```

## What's Included

- React and JSX syntax support.
- CSS & SASS Module Support.
- Autoprefixed CSS, so you don’t need `-webkit-` or other prefixes.
- Alias for the src/styles directory, you can import from styles without a relative path (`import css from 'styles/Page';`)

## API

Documentation for the metaweather API can be found at: https://www.metaweather.com/api/

We've already taken care of setting the proper CORS headers in the dev server environment.