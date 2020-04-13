import React from 'react'

export const LocationInfo = ({ text }) => {
	return (
		<div
			title="Location Info"
			data-toggle="popover"
			data-placement="right"
			data-trigger="focus"
			data-content={`Longitude: ${text.lng}, Latitude: ${text.lat}`}
			className="popover"
		>
			{`Longitude: ${text.lng}, Latitude: ${text.lat}`}
		</div>
	)
};

LocationInfo.defaultProps = {
	text: 'Info'
};
