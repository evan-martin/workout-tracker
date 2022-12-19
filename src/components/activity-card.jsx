import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './component-styles/activity-card.scss'

const ActivityCard = ({ activity }) => {

    const accessToken = process.env.REACT_APP_ACCESS_TOKEN;
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
        const hours = Math.floor(tempSeconds/3600)
        const minutes = Math.floor((tempSeconds %= 3600)/60)
        const formattedSeconds = tempSeconds %= 60
        if(seconds > 3600){
            return hours + 'h ' + minutes + 'm'
        }else{
            return minutes + 'm '+ formattedSeconds + 's'
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
                    <p> {(activity.distance / 1609.34).toFixed(2)} mi</p>}
                {activity.average_speed > 0 &&
                    <p> {(activity.average_speed * 2.237).toFixed(1)} mph</p>}
                <p> {toTime(activity.moving_time)}</p>
            </div>
            {activity.map.summary_polyline !== "" &&
                <img src={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/static/path-5+501078-0.8(${encodeURIComponent(activity.map.summary_polyline)})/auto/300x150@2x?access_token=${accessToken}`} alt={activity.name} />}
            {activity.map.summary_polyline === "" &&
                <img className='disabled' src={`https://api.mapbox.com/styles/v1/mapbox/navigation-day-v1/static/-123.79550808529598,48.051579742235845,5/300x150@2x?access_token=${accessToken}`} alt={activity.name} />}


        </>
    )
}

export default ActivityCard;