import React, { useState, useEffect } from 'react';
import ReactMapGl, { Marker, Popup } from 'react-map-gl';
import { useEventsContext } from '../Contexts/data';
import { MapView } from '../Elements/index';

function EventMap() {
	const token = 'pk.eyJ1IjoiZ29sLWQtcm9nZXIiLCJhIjoiY2s3dmZ3MjczMGV4cjNrbXNwMTM3OWdvdiJ9.JtyAa0JpAqPIT7Zb8KZBqw';

	const [ viewPort, setViewPort ] = useState({
		width: '100wh',
		height: '100vh',
		latitude: 40.6317719,
		longitude: -74.3050915,
		zoom: 6
	});
	const events = useEventsContext();

	useEffect(
		() => {
			const listener = (e) => {
				if (e.key === 'Escape') {
					setSelectedEvent(null);
				}
			};
			window.addEventListener('keydown', listener);
			return () => {
				window.removeEventListener('keydown', listener);
			};
		},
		[ events ]
	);

	const [ selectedEvent, setSelectedEvent ] = useState(null);

	return (
		<MapView>
			<ReactMapGl
				{...viewPort}
				mapStyle="mapbox://styles/gol-d-roger/ck7vgbuq70ipf1ipe56asay4j"
				mapboxApiAccessToken={token}
				onViewportChange={(viewport) => {
					setViewPort(viewport);
				}}
			>
				{events !== [] &&
					events.map((obj) => {
						return obj.data.map(
							(geo) =>
								geo.location !== null && geo.location.location !== undefined ? geo.location.location
									.longitude !== null ? (
									<Marker
										key={geo.id}
										latitude={geo.location.location.latitude}
										longitude={geo.location.location.longitude}
									>
										<button
											onClick={(e) => {
												e.preventDefault();
												setSelectedEvent(geo);
											}}
										>
											<img src="../../flag.png" alt="flag" width="40px" height="40px" />
										</button>
									</Marker>
								) : null : null
						);
					})}
				{selectedEvent && (
					<Popup
						onClose={() => setSelectedEvent(null)}
						latitude={selectedEvent.location.location.latitude}
						longitude={selectedEvent.location.location.longitude}
					>
						Event
					</Popup>
				)}
			</ReactMapGl>
		</MapView>
	);
}

export default React.memo(EventMap);
