import React, { useState } from 'react';
import Header from '../components/header';
import LineChart from '../components/line-chart';
import Button from '@mui/material/Button';

import './page-styles/overview.scss'

const Overview = ({ userData, formattedMonths, monthlyDistance, monthlyTime, monthlyElevation, formattedWeeks, weeklyDistance, weeklyTime, weeklyElevation }) => {

    const [monthlyData, setMonthlyData] = useState(monthlyDistance)
    const [weeklyData, setWeeklyData] = useState(weeklyDistance)

    return (
        <>
            <Header />
            <div className='overview-container'>
                <div className='overview-card'>
                    <div className='title'>
                        <p>{userData.name}</p>
                    </div>
                    <div className='user-data-container'>
                        <div className='user-data'>
                            <div className='card'>
                                <p>Longest ride: {(userData.biggest_ride / 1609.34).toFixed(2)} mi</p>
                            </div>
                            <div className='card'>
                                <p>All Time:</p>
                                <p>Number of Rides: {userData.all_ride_totals.count}</p>
                                <p>Total Distance: {Math.round(userData.all_ride_totals.distance / 1609.34).toLocaleString()} mi</p>
                                <p>Total Time: {((userData.all_ride_totals.moving_time) / 60 / 60).toFixed(0)} hrs</p>
                                <p>Total Elevation Gain: {Math.round(userData.all_ride_totals.elevation_gain * 3.28).toLocaleString()} ft</p>
                            </div>
                            <div className='card'>
                                <p>Year to Date:</p>
                                <p>Number of Rides: {userData.ytd_ride_totals.count}</p>
                                <p>Total Distance: {Math.round(userData.ytd_ride_totals.distance / 1609.34).toLocaleString()} mi</p>
                                <p>Total Time: {((userData.ytd_ride_totals.moving_time) / 60 / 60).toFixed(0)} hrs</p>
                                <p>Total Elevation Gain: {Math.round(userData.ytd_ride_totals.elevation_gain * 3.28).toLocaleString()} ft</p>
                            </div>
                        </div>

                        <div className='chart'>
                            <LineChart category={formattedMonths} data={monthlyData} name={"Monthly Distance"} xaxis={"Month"} yaxis={"Feet"} isLoaded={true} />
                            <Button onClick={() => { setMonthlyData(monthlyDistance) }} variant="contained">Distance</Button>
                            <Button onClick={() => { setMonthlyData(monthlyTime) }} variant="contained">Time</Button>
                            <Button onClick={() => { setMonthlyData(monthlyElevation) }} variant="contained">Elevation</Button>
                            {/* </div>
                <div className='chart'> */}
                            <LineChart category={formattedWeeks} data={weeklyData} name={"Weekly Time"} xaxis={"Week"} yaxis={"Feet"} isLoaded={true} />
                            <button className='outlined-button' onClick={() => { setWeeklyData(weeklyDistance) }}>Distance</button>
                            <button className='outlined-button' onClick={() => { setWeeklyData(weeklyTime) }}>Time</button>
                            <button className='outlined-button' onClick={() => { setWeeklyData(weeklyElevation) }}>Elevation</button>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default Overview