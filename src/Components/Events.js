import React, { useState, useRef, useCallback } from 'react';
import { useEventsContext, useSetEventContext } from '../Contexts/data';
import { EventContainer, EventCard, EventDetails, Img, NoEvents } from '../Elements';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Spinner from './Spinner';

import useEventSearch from '../Hooks/useEventSearch';

function Events() {
	const [ pageNumber, setPageNumber ] = useState(1);

	const { loading, hasMore } = useEventSearch(pageNumber);

	const events = useEventsContext();

	const setEvent = useSetEventContext();

	const observer = useRef();

	const lastEventElement = useCallback(
		(node) => {
			if (loading) return;
			if (observer.current) observer.current.disconnect();
			observer.current = new IntersectionObserver((entries) => {
				if (entries[0].isIntersecting && hasMore) {
					setPageNumber((prev) => prev + 1);
				}
			});
			if (node) observer.current.observe(node);
		},
		[ loading, hasMore ]
	);

	const handleClick = (event) => {
		setEvent(event);
	};

	return (
		<EventContainer>
			{events !== [] &&
				events.map((obj, index) => {
					return obj.data.map((item, index) => {
						if (item.length === index + 1) {
							return (
								<EventCard key={index} ref={lastEventElement}>
									<div>
										<Img src={item.featured_image_url} alt="image" />
									</div>
									<EventDetails>
										<h2>{item.event_type}</h2>
										<h3>
											{item.timeslots &&
												moment.unix(item.timeslots[0].start_date).format('dddd MMMM Do, YYYY')}
										</h3>

										<Link onClick={() => handleClick(item)} to={`/event/${item.id}`}>
											{item.title}
										</Link>

										<div>
											{item.location === null ? (
												<span> Virtual </span>
											) : (
												<p>
													<span>{item.location.venue}</span>
													<span>{item.location.locality} </span>

													<span>{item.location.region}</span>
												</p>
											)}
										</div>
									</EventDetails>
								</EventCard>
							);
						} else {
							return (
								<EventCard key={index} ref={lastEventElement}>
									<div>
										<Img src={item.featured_image_url} alt="image" url={item.featured_image_url} />
									</div>
									<EventDetails>
										<h2>{item.event_type}</h2>
										<h3>
											{item.timeslots &&
												item.timeslots[0] &&
												moment.unix(item.timeslots[0].start_date).format('dddd MMMM Do, YYYY')}
										</h3>

										<Link onClick={() => handleClick(item)} to={`/event/${item.id}`}>
											{item.title}
										</Link>

										<div>
											{item.location === null ? (
												<span> Virtual </span>
											) : (
												<p>
													<span>{item.location.venue}</span>
													<span>{item.location.locality} </span>

													<span>{item.location.region}</span>
												</p>
											)}
										</div>
									</EventDetails>
								</EventCard>
							);
						}
					});
				})}

			{loading && <Spinner />}
			{events !== [] && events && <NoEvents>No Events meet your search criteria. Search again </NoEvents>}
		</EventContainer>
	);
}

export default Events;
