import React, { useState } from 'react';
import Header from '../components/header';
import LineChart from '../components/line-chart';
import Button from '@mui/material/Button';

import './page-styles/overview.scss'

const Overview = ({ formattedMonths, monthlyDistance, monthlyTime, monthlyElevation, formattedWeeks, weeklyDistance, weeklyTime, weeklyElevation }) => {

    const [monthlyData, setMonthlyData] = useState(monthlyDistance)
    const [weeklyData, setWeeklyData] = useState(weeklyDistance)

    return (
        <div>
            <Header />
            <h1>Overview</h1>
            <div className='chart'>
                <LineChart category={formattedMonths} data={monthlyData} name={"Monthly Distance"} xaxis={"Month"} yaxis={"Feet"} isLoaded={true} />
                <Button  onClick={() => { setMonthlyData(monthlyDistance) }} variant="contained">Distance</Button>
                <Button  onClick={() => { setMonthlyData(monthlyTime) }} variant="contained">Time</Button>
                <Button  onClick={() => { setMonthlyData(monthlyElevation) }} variant="contained">Elevation</Button>
            </div>
            <div className='chart'>
                <LineChart category={formattedWeeks} data={weeklyData} name={"Weekly Time"} xaxis={"Week"} yaxis={"Feet"} isLoaded={true} />
                <button className='outlined-button' onClick={() => { setWeeklyData(weeklyDistance) }}>Distance</button>
                <button className='outlined-button' onClick={() => { setWeeklyData(weeklyTime) }}>Time</button>
                <button className='outlined-button' onClick={() => { setWeeklyData(weeklyElevation) }}>Elevation</button>
            </div>
        </div>
    )
}
export default Overview