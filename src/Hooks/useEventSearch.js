import { useEffect, useState, useCallback } from 'react';
import { useSetEventsContext, useFilterContext, useSetFilterContext } from '../Contexts/data';
import { filterChanged } from '../utils/equal';
import usePrevious from '../Hooks/usePrevious';
import axios from 'axios';

export default function useEventSearch(pageNumber) {
	const [ loading, setLoading ] = useState(false);
	const [ error, setError ] = useState(false);
	const [ hasMore, setHasMore ] = useState(false);

	const setEvents = useSetEventsContext();
	const filters = useFilterContext();
	const setFilters = useSetFilterContext();

	let { event_types, is_virtual } = filters;

	const prevRef = usePrevious(filters);

	const isfiltered = filterChanged(prevRef, filters);

	useEffect(
		() => {
			if (!isfiltered) {
				setLoading(true);
				setError(false);
				axios({
					method: 'GET',
					url: 'https://api.mobilize.us/v1/events',
					params: { page: 1, event_types, is_virtual }
				})
					.then(({ data }) => {
						setEvents([ { ...data } ]);
						setHasMore(data.next !== null);
						setLoading(false);
					})
					.catch((e) => {
						setError(e);
						console.log(e);
					});
			}
		},
		[ filters ]
	);
	useEffect(
		() => {
			// need to reset the page if it was filtered  *****
			// if (isfiltered) pageNumber = 1;
			setLoading(true);
			setError(false);
			axios({
				method: 'GET',
				url: 'https://api.mobilize.us/v1/events',
				params: { page: pageNumber, event_types, is_virtual }
			})
				.then(({ data }) => {
					// set events based on if the page has been filtered

					setEvents((prev) => {
						return [ ...prev, data ];
					});

					setHasMore(data.next !== null);
					setLoading(false);
				})
				.catch((e) => {
					setError(e);
					console.log(e);
				});
		},
		[ pageNumber ]
	);
	return { loading, error, hasMore };
}
