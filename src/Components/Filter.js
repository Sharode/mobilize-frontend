import React from 'react';
import { Container, Select, Label, Btn, Title } from '../Elements';
import { useSetFilterContext, useFilterContext, eventTypes } from '../Contexts/data';

function Filter() {
	const filters = useFilterContext();
	const setFilters = useSetFilterContext();
	let reset = {
		event_types: null,
		is_virtual: null
	};

	const handleEventChange = (e) => {
		e.preventDefault();
		setFilters({
			...filters,
			[e.target.name]: e.target.value
		});
	};

	return (
		<Container>
			<Title>Filters</Title>
			<Label> Event Type</Label>
			<Select name="event_types" value={filters.event_types} onChange={(e) => handleEventChange(e)}>
				{eventTypes.map((event) => (
					<option key={event} value={event === 'All' ? null : event.toLowerCase()}>
						{event.toLowerCase()}
					</option>
				))}
			</Select>
			<Label> Virtual</Label>

			<Select name="is_virtual" value={filters.is_virtual} onChange={(e) => handleEventChange(e)}>
				<option value="">Both</option>
				<option value="yes">Yes</option>
				<option value="no">No</option>
			</Select>
			<Btn onClick={() => setFilters(reset)}> Reset</Btn>
		</Container>
	);
}

export default Filter;
