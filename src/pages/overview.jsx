import React, { useState } from 'react';
import Header from '../components/header';
import Button from '@mui/material/Button';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';


import './page-styles/overview.scss'
import OverviewCharts from '../components/overview-charts';

const Overview = ({ userData, formattedMonths, monthlyDistance, monthlyTime, monthlyElevation, formattedWeeks, weeklyDistance, weeklyTime, weeklyElevation }) => {

    const [monthlyData, setMonthlyData] = useState(monthlyDistance)
    const [weeklyData, setWeeklyData] = useState(weeklyDistance)

    return (
        <>
            <Header />
            <div className='overview-container'>
                <div className='overview-card'>
                    <div className='title'>
                        <h3>{userData.name}</h3>
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
                            <OverviewCharts />
                            {/* <ActivityDetailCharts category={formattedMonths} data={monthlyData} name={"Monthly Distance"} xaxis={"Month"} yaxis={"Feet"} isLoaded={true} /> */}
                            <ToggleButtonGroup
                                value={monthlyData}
                                exclusive
                                // onChange={handleAlignment}
                            >
                                <ToggleButton value="monthlyDistance" >
                                    Distance
                                </ToggleButton>
                                <ToggleButton value="monthlyTime">
                                    Time
                                </ToggleButton>
                                <ToggleButton value="monthlyElevation" >
                                    Elevation
                                </ToggleButton>
                            </ToggleButtonGroup>
                            {/* <Button onClick={() => { setMonthlyData(monthlyDistance) }} variant="contained">Distance</Button>
                            <Button onClick={() => { setMonthlyData(monthlyTime) }} variant="contained">Time</Button>
                            <Button onClick={() => { setMonthlyData(monthlyElevation) }} variant="contained">Elevation</Button> */}
                            {/* </div>
                <div className='chart'> */}
                            {/* <ActivityDetailCharts category={formattedWeeks} data={weeklyData} name={"Weekly Time"} xaxis={"Week"} yaxis={"Feet"} isLoaded={true} /> */}
                            
                            <ToggleButtonGroup
                                
                                value={weeklyData}
                                exclusive
                                // onChange={handleAlignment}
                            >
                                <ToggleButton  color="primary" value="left" aria-label="left aligned">
                                    Distance
                                </ToggleButton>
                                <ToggleButton value="center" aria-label="centered">
                                    Time
                                </ToggleButton>
                                <ToggleButton value="right" aria-label="right aligned">
                                    Elevation
                                </ToggleButton>
                            </ToggleButtonGroup>
                            {/* <button className='outlined-button' onClick={() => { setWeeklyData(weeklyDistance) }}>Distance</button>
                            <button className='outlined-button' onClick={() => { setWeeklyData(weeklyTime) }}>Time</button>
                            <button className='outlined-button' onClick={() => { setWeeklyData(weeklyElevation) }}>Elevation</button> */}
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default Overview