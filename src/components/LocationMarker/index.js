import React, { useState } from 'react';
import { LocationInfo } from '../LocationInfo';

export const LocationMarker = ({ text, locationInfo }) => {
	const [show, setShow] = useState(false)
	return (
		<div
			onClick={() => setShow(true)}
			onMouseLeave={() => setShow(false)}
		>
			{
				show && <LocationInfo text={locationInfo}/>
			}
			{text}
			<i className="fas fa-map-marker fa-3x text-danger"/>
		</div>
	)
};

LocationMarker.defaultProps = {
	text: 'My Marker',
	displayInfo: false
};
