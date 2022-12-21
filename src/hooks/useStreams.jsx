import { useEffect, useState } from 'react';
import axios from 'axios';

function useStream(activityID) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [distance, setDistance] = useState([]);
    const [elevation, setElevation] = useState([]);
    const [heartrate, setHeartrate] = useState([]);
    const [velocity, setVelocity] = useState([])

    const clientID = process.env.REACT_APP_CLIENT_ID;
    const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
    const refreshToken = process.env.REACT_APP_REFRESH_TOKEN;

    useEffect(() => {

        async function getData() {
            try {
                const accessToken = await axios.post(`https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`)
                const res = await axios.get(`https://www.strava.com/api/v3/activities/${activityID}/streams?keys=distance,altitude,velocity_smooth,heartrate,&key_by_type=true&access_token=${accessToken.data.access_token}`)
                setDistance(res.data.distance.data.map((value) => ({ ["label"]: value * 3.28084 })));
                setElevation(res.data.altitude.data.map((value) => ({ ["value"]: value * 3.28084 })));
                setHeartrate(res.data.heartrate.data.map((value) => ({ ["value"]: value })));
                setVelocity(res.data.velocity_smooth.data.map((value) => ({ ["value"]: value * 2.23694 })));
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
        distance,
        elevation,
        heartrate,
        velocity
    }
}

export { useStream }