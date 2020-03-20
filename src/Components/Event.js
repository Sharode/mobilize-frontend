import React from 'react';
import { useEventContext } from '../Contexts/data';
import { Redirect, Link } from 'react-router-dom';
import { EventWrapper, EventPage, InnerDetails } from '../Elements';
function Event() {
	const event = useEventContext();

	if (event.id === undefined) {
		return <Redirect to="/" />;
	} else {
		return (
			<EventWrapper>
				<Link to="/"> Browse all Event</Link>
				<EventPage>
					<h1>{event.title}</h1>
					<InnerDetails>
						<img src={`${event.featured_image_url}`} alt="Image" />
						<div>
							<h2>{event.event_type}</h2>
							<p>{event.summary}</p>
							<p>{event.description}</p>
						</div>
					</InnerDetails>
				</EventPage>
			</EventWrapper>
		);
	}
}

export default Event;
