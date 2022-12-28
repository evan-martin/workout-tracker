import { useEffect, useState } from 'react';
import axios from 'axios';
import { Elevator } from '@mui/icons-material';

function useStream(activityID) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [streamData, setStreamData] = useState([]);

    const clientID = process.env.REACT_APP_CLIENT_ID;
    const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
    const refreshToken = process.env.REACT_APP_REFRESH_TOKEN;

    let arr = [];

    useEffect(() => {

        async function getData() {
            try {
                const accessToken = await axios.post(`https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`)
                const res = await axios.get(`https://www.strava.com/api/v3/activities/${activityID}/streams?keys=distance,altitude,velocity_smooth,heartrate,&key_by_type=true&access_token=${accessToken.data.access_token}`)

                for (let i = 0; i < res.data.distance.original_size; i+=50) {
                   arr.push({
                    distance: Math.round((res.data.distance.data[i]/1609)*100)/100,
                    elevation: Math.round(res.data.altitude.data[i]* 3.28084),
                    heartrate: res.data.heartrate.data[i],
                    velocity: Math.round(res.data.velocity_smooth.data[i]* 2.23694),
                   })
                }
                setStreamData(arr)
                setIsLoaded(true)

            } catch (error) {
                console.log(error)
                setIsLoaded(true);
                setError(error);
            };
        }
        getData();
    }, []);

    return {
        isLoaded,
        error,
        streamData
    }
}

export { useStream }