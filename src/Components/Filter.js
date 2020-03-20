import React from 'react';
import { Container, Select, Input, Label, Btn, Title } from '../Elements';
import { useSetFilterContext, useFilterContext } from '../Contexts/data';

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
				<option value="Canvass">Canvass</option>
				<option value="'PHONE_BANK'">Phone Book</option>
				<option value="TEXT_BANK">Text Bank</option>
				<option value="meeting">Meeting</option>
				<option value="">All</option>
			</Select>
			<Label> Virtual</Label>

			<Select name="is_virtual" value={filters.is_virtual} onChange={(e) => handleEventChange(e)}>
				<option value="yes">Yes</option>
				<option value="no">No</option>
				<option value="">Both</option>
			</Select>
			<Btn onClick={() => setFilters(reset)}> Reset</Btn>
		</Container>
	);
}

export default Filter;
