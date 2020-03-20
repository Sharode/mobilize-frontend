import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Filter from './Components/Filter';
import Events from './Components/Events';
import Event from './Components/Event';
import EventMap from './Components/EventMap';

function App() {
	return (
		<Switch>
			<Route path="/event/:id">
				<Event />
			</Route>
			<Route exact path="/">
				<Filter />
				<Events />
				<EventMap />
			</Route>
			<Route path="/*">
				<Redirect to="/" />
			</Route>
		</Switch>
	);
}

export default App;
