import { useEffect, useState } from 'react';
import axios from 'axios';

function useUserData() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [userData, setUserData] = useState([]);

    const clientID = process.env.REACT_APP_CLIENT_ID;
    const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
    const refreshToken = process.env.REACT_APP_REFRESH_TOKEN;

    useEffect(() => {

        async function getData() {
            try {
                const accessToken = await axios.post(`https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`)
                const res = await axios.get(`https://www.strava.com/api/v3/athlete?access_token=${accessToken.data.access_token}`)
                const id = res.data.id;
                const response = await axios.get(`https://www.strava.com/api/v3/athletes/${id}/stats?access_token=${accessToken.data.access_token}`)
                let data = {
                    "name": res.data.firstname + " " + res.data.lastname,
                    "biggest_ride": response.data.biggest_ride_distance,
                    "all_ride_totals": response.data.all_ride_totals,
                    "ytd_ride_totals": response.data.ytd_ride_totals
                }
                setUserData(data)

            } catch (error) {
                console.log(error)
                setIsLoaded(true);
                setError(error);
            };
        }
        getData();
    }, [clientID, clientSecret, refreshToken]);

    return {
        isLoaded,
        error,
        userData
    }
}

export { useUserData }