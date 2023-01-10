import React, { useState } from 'react';
import Header from '../components/header';
import Button from '@mui/material/Button';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';


import './page-styles/overview.scss'
import OverviewCharts from '../components/overview-charts';

const Overview = ({ userData, monthlyData, weeklyData }) => {

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
                            <OverviewCharts monthlyData={monthlyData} weeklyData={weeklyData}/>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default Overview