import { useEffect, useState } from 'react';
import axios from 'axios';

function useStrava() {

    //state variables
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);
    const [monthlyData, setMonthlyData] = useState([])
    const [weeklyData, setWeeklyData] = useState([])

    //connection variables
    const clientID = process.env.REACT_APP_CLIENT_ID;
    const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
    const refreshToken = process.env.REACT_APP_REFRESH_TOKEN;

    const currentTime = new Date();
    const epochTime = currentTime.getTime() / 1000.0;
    const oneYearAgo = Math.trunc(epochTime - 31536000)

    //misc variables
    const monthStrings = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dataByMonth =
    {
        "January": { "Distance": [], "Time": [], "Elevation": [] },
        "Febuary": { "Distance": [], "Time": [], "Elevation": [] },
        "March": { "Distance": [], "Time": [], "Elevation": [] },
        "April": { "Distance": [], "Time": [], "Elevation": [] },
        "May": { "Distance": [], "Time": [], "Elevation": [] },
        "June": { "Distance": [], "Time": [], "Elevation": [] },
        "July": { "Distance": [], "Time": [], "Elevation": [] },
        "August": { "Distance": [], "Time": [], "Elevation": [] },
        "September": { "Distance": [], "Time": [], "Elevation": [] },
        "October": { "Distance": [], "Time": [], "Elevation": [] },
        "November": { "Distance": [], "Time": [], "Elevation": [] },
        "December": { "Distance": [], "Time": [], "Elevation": [] },
    }

    useEffect(() => {
        async function getData() {
            try {
                const accessToken = await axios.post(`https://www.strava.com/oauth/token?client_id=${clientID}&client_secret=${clientSecret}&refresh_token=${refreshToken}&grant_type=refresh_token`)
                const res = await axios.get(`https://www.strava.com/api/v3/athlete/activities?after=${oneYearAgo}&page=1&per_page=200&access_token=${accessToken.data.access_token}`)
                chunkData(res.data)
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

    //format monthly and weekly total distance, time and elevations for graphing
    const chunkData = (data) => {

        const dataByWeek = {};
        const currentWeek = new Date()
        let count = currentWeek.getWeek()
        let formattedWeek =[]

        //constructs weeks object
        for (let i = 0; i < 52; i++) {
            if (count === 0) {
                count = 52;
            }
            dataByWeek[count] = {"Distance": [], "Time": [], "Elevation": []};
            count--;
        }

        for (let i = 0; i < data.length; i++) {
            let date = new Date(data[i].start_date);
            let month = monthStrings[date.getMonth()];
            dataByMonth[`${month}`].Distance.push(data[i].distance);
            dataByMonth[`${month}`].Time.push(data[i].moving_time);
            dataByMonth[`${month}`].Elevation.push(data[i].total_elevation_gain);

            if (dataByWeek.hasOwnProperty(date.getWeek())) {
                dataByWeek[date.getWeek()].Distance.push(data[i].distance)
                dataByWeek[date.getWeek()].Time.push(data[i].moving_time)
                dataByWeek[date.getWeek()].Elevation.push(data[i].total_elevation_gain)
            }
        }

        let arr = [];

        Object.keys(dataByMonth).forEach(function (month) {
            let tempDist = dataByMonth[month].Distance.reduce((a, b) => a + b, 0)
            let tempTime = dataByMonth[month].Time.reduce((a, b) => a + b, 0)
            let tempEle = dataByMonth[month].Elevation.reduce((a, b) => a + b, 0)

            arr.push({
                month: month,
                distance: Math.round(tempDist /1609),
                time: Math.round(tempTime/60/60),
                elevation: Math.round(tempEle * 3.281)
            })
        });

        setMonthlyData(arr)

        let arr2 = []

        Object.keys(dataByWeek).forEach(function (week) {
            let tempDist = dataByWeek[week].Distance.reduce((a, b) => a + b, 0)
            let tempTime = dataByWeek[week].Time.reduce((a, b) => a + b, 0)
            let tempEle = dataByWeek[week].Elevation.reduce((a, b) => a + b, 0)
            arr2.push({
                week: week,
                distance: Math.round(tempDist /1609),
                time: Math.round(tempTime/60/60),
                elevation: Math.round(tempEle * 3.281)
            })
        });

        setWeeklyData(arr2)

    }


    Date.prototype.getWeek = function () {
        var onejan = new Date(this.getFullYear(), 0, 1);
        var today = new Date(this.getFullYear(), this.getMonth(), this.getDate());
        var dayOfYear = ((today - onejan + 86400000) / 86400000);
        return Math.ceil(dayOfYear / 7)
    };

    return {
        isLoaded,
        error,
        data,
        monthlyData,
        weeklyData
    }
}

export { useStrava }