import React from 'react';
import spinner from '../Elements/spinner.gif';

const Spinner = () => {
	return (
		<div>
			<img src={spinner} style={{ width: '400px', margin: 'auto', display: 'block' }} alt="Loading..." />
		</div>
	);
};

export default Spinner;
