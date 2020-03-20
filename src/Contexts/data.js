import * as React from 'react';

const SetEventsContext = React.createContext(null);
const EventsContext = React.createContext(null);
const SetEventContext = React.createContext(null);
const EventContext = React.createContext(null);
const SetFilterContext = React.createContext(null);
const FilterContext = React.createContext(null);

export const useEventsContext = () => {
	const events = React.useContext(EventsContext);
	if (!events) throw new Error('Used outside of Events context');
	return events;
};

export const useSetEventsContext = () => {
	const setEvents = React.useContext(SetEventsContext);
	if (!setEvents) throw new Error('Used outside of setEvents context');
	return setEvents;
};

export const useEventContext = () => {
	const event = React.useContext(EventContext);
	if (!event) throw new Error('Used outside of event context');
	return event;
};
export const useSetEventContext = () => {
	const setEvent = React.useContext(SetEventContext);
	if (!setEvent) throw new Error('Used outside of setEvent context');
	return setEvent;
};
export const useFilterContext = () => {
	const filters = React.useContext(FilterContext);
	if (!filters) throw new Error('Used outside of filters context');
	return filters;
};
export const useSetFilterContext = () => {
	const setFilters = React.useContext(SetFilterContext);
	if (!setFilters) throw new Error('Used outside of setFilters context');
	return setFilters;
};

export const eventTypes = [
	'All',
	'CANVASS',
	'PHONE_BANK',
	'TEXT_BANK',
	'MEETING',
	'COMMUNITY',
	'FUNDRAISER',
	'MEET_GREET',
	'HOUSE_PARTY',
	'VOTER_REG',
	'TRAINING',
	'FRIEND_TO_FRIEND_OUTREACH',
	'DEBATE_WATCH_PARTY',
	'ADVOCACY_CALL',
	'RALLY',
	'TOWN_HALL',
	'OFFICE_OPENING',
	'BARNSTORM',
	'SOLIDARITY_EVENT',
	'COMMUNITY_CANVASS',
	'SIGNATURE_GATHERING',
	'CARPOOL',
	'OTHER'
];
export const Consumer = ({ children }) => {
	const [ events, setEvents ] = React.useState([]);
	const [ event, setEvent ] = React.useState({});
	const [ filters, setFilters ] = React.useState({
		event_types: null,
		is_virtual: null
	});

	return (
		<EventsContext.Provider value={events}>
			<SetEventsContext.Provider value={setEvents}>
				<EventContext.Provider value={event}>
					<SetEventContext.Provider value={setEvent}>
						<FilterContext.Provider value={filters}>
							<SetFilterContext.Provider value={setFilters}>{children}</SetFilterContext.Provider>
						</FilterContext.Provider>
					</SetEventContext.Provider>
				</EventContext.Provider>
			</SetEventsContext.Provider>
		</EventsContext.Provider>
	);
};
