import { useEffect, useState } from 'react';
import axios from 'axios';

function useStrava() {

    //state variables
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    //connection variables
    const clientID = process.env.REACT_APP_CLIENT_ID;
    const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
    const refreshToken = process.env.REACT_APP_REFRESH_TOKEN;

    const currentTime = new Date();
    const epochTime = currentTime.getTime() / 1000.0;
    const oneYearAgo = Math.trunc(epochTime - 31536000)

    useEffect(() => {
        async function getData() {
            try {
                const accessToken = await axios.post(`https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`)
                const res = await axios.get(`https://www.strava.com/api/v3/athlete/activities?after=${oneYearAgo}&page=1&per_page=200&access_token=${accessToken.data.access_token}`)
                setIsLoaded(true);
                setData(res.data.reverse());

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
        data,
    }
}

export { useStrava }