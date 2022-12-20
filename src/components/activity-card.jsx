import React, { useState, useEffect } from 'react';
import axios from 'axios';
import mapboxgl from 'mapbox-gl';
import polyline from '@mapbox/polyline';
import StraightenIcon from '@mui/icons-material/Straighten';
import SpeedIcon from '@mui/icons-material/Speed';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import './component-styles/activity-card.scss'

const ActivityCard = ({ activity }) => {

    const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
    const coordinates = polyline.decode(activity.map.summary_polyline);
    const [location, setLocation] = useState([])

    useEffect(() => {
        const startLocation = activity.start_latlng
        async function getLocation() {
            try {
                const location = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${startLocation[1]},${startLocation[0]}.json?types=place,region&access_token=${accessToken}`)
                setLocation(location.data.features[0].text + ", " + location.data.features[1].properties.short_code.slice(3, 5))
            } catch (error) {
                console.log(error)
            };
        }
        if (activity.start_latlng != []) {
            getLocation();
        }
    }, []);

    const toTime = (seconds) => {
        let tempSeconds = seconds
        const hours = Math.floor(tempSeconds / 3600)
        const minutes = Math.floor((tempSeconds %= 3600) / 60)
        const formattedSeconds = tempSeconds %= 60
        if (seconds > 3600) {
            return hours + 'h ' + minutes + 'm'
        } else {
            return minutes + 'm ' + formattedSeconds + 's'
        }
    }

    const toDate = (date) => {
        return new Date(date).toLocaleDateString(
            'en-us',
            {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
            }
        );
    }

    for (let i = 0; i < coordinates.length; i++) {
        coordinates[i] = [
            coordinates[i][1],
            coordinates[i][0]
        ];
    }

    const bounds = coordinates.reduce(function (bounds, coord) {
        return bounds.extend(coord);
    }, new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]));

    return (
        <>
            <div className='activity-title'>
                <div>
                    <p className='title'>{activity.name} </p>
                    <p className='date'>{toDate(activity.start_date)}</p>
                </div>
                <div className='location'>
                    {location}
                </div>
            </div>
            <div className='activity-overview'>
                {activity.distance > 0 &&
                    <div className='icon-number'>
                        <StraightenIcon />
                        <p> {(activity.distance / 1609.34).toFixed(2)} mi</p>
                    </div>}
                {activity.average_speed > 0 &&
                    <div className='icon-number'>
                        <SpeedIcon />
                        <p> {(activity.average_speed * 2.237).toFixed(1)} mph</p>
                    </div>}
                <div className='icon-number'>
                    <AccessTimeIcon />
                    <p>{toTime(activity.moving_time)}</p>
                </div>
            </div>
            {activity.map.summary_polyline !== "" &&
                <img src={`https://api.mapbox.com/styles/v1/mapbox/light-v10/static/path-5+501078-0.8(${encodeURIComponent(activity.map.summary_polyline)})/[${bounds._sw.lng},${bounds._sw.lat},${bounds._ne.lng},${bounds._ne.lat}]/300x150@2x?padding=30&access_token=${accessToken}`} alt={activity.name} />}
            {activity.map.summary_polyline === "" &&
                <img className='disabled' src={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/-122.79550808529598,48.051579742235845,4/300x150@2x?access_token=${accessToken}`} alt={activity.name} />}
        </>
    )
}

export default ActivityCard;