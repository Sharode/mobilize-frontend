This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## How to Run App

Git clone the repo.
Either use yarn add or npm install to install the node modules.
Yarn start or npm start will run the app locally.


## Design
I based my design decision from the popular sites such as eventbrite and meetup. 
There they had implement a map view integrated with the events listing.
Ideally, when you hover over the event, the corresponding map marker will be focused on, but 
given my time constraint, I decided to focus on that was not included.
Infinite scrolling however was a feature I built with this app in addition to filtering by event type and virtuality. 

This app is only designed from a desktop view. Ideally both would be implemented with more time. I chose to do desktop design because the map feature would not display if it was mobile which sites like eventbrite and meetup does as well. 

=

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

