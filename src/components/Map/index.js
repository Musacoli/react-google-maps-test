import GoogleMapReact from 'google-map-react';
import React, { useState } from 'react';
import { LocationMarker } from '../LocationMarker';


const Map = (props) => {
	const {
		defaultCenter,
		zoom
	} = props;

	const [local, setLocal] = useState({ lat:59.955413, lng:30.337844 })
	const [center, setCenter] = useState(undefined);

	const setUserLocation = (position) => {
		setLocal({
			lat: position.coords.latitude,
			lng: position.coords.longitude
		});
		setCenter({
			lat: position.coords.latitude,
			lng: position.coords.longitude
		})
	};

	const handleError = (error) => {
		console.log('Error occurred. Error code: ' + error.code);
	};

	const geoOptions = {
		enableHighAccuracy: true
	};

	const findMe = () => navigator.geolocation.getCurrentPosition(setUserLocation, handleError, geoOptions);

	return (
		<div className='Map'>
			<button
				type='button'
				className='btn btn-primary btn-lg position-absolute mt-2 sticky-top'
				onClick={findMe}
			>
				Find Me
			</button>
			<GoogleMapReact
				bootstrapURLKeys={{ key: '', language: 'en' }}
				center={center}
				defaultCenter={defaultCenter}
				defaultZoom={zoom}
				// onChildMouseEnter={onChildMouseEnter}
				// onChildMouseLeave={onChildMouseLeave}
			>
				<LocationMarker
					lat={local.lat}
					lng={local.lng}
					text="Collins Marker"
					locationInfo={local}
				/>
			</GoogleMapReact>
		</div>
	)
};

Map.defaultProps = {
	defaultCenter: {
		lat: 59.95,
		lng: 30.33
	},
	zoom: 11
};

export default Map
