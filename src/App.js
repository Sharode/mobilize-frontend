import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Filter from './Components/Filter';
import Events from './Components/Events';
import Event from './Components/Event';
import EventMap from './Components/EventMap';
import { MainContainer, Wrapper } from './Elements';
import { Consumer } from './Contexts/data';

function App() {
	return (
		<Switch>
			<Consumer>
				<MainContainer>
					<Route path="/event/:id">
						<Event />
					</Route>
					<Route exact path="/">
						<Wrapper>
							<Filter />
							<Events />
						</Wrapper>
						<EventMap />
					</Route>
					<Route path="/*">
						<Redirect to="/" />
					</Route>
				</MainContainer>
			</Consumer>
		</Switch>
	);
}

export default App;
