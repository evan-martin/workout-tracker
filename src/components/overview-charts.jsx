import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    LineChart,
    Line,
    BarChart,
    Bar
} from "recharts";

const OverviewCharts = ({ monthlyData, weeklyData}) => {

    const [data, setData] = useState("distance")

        return (
            <div>
                <h3>Monthly</h3>
                <BarChart
                    width={500}
                    height={250}
                    data={monthlyData}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}
                >
                    <XAxis dataKey="month" />
                    <YAxis domain={["dataMin", "dataMax"]} type="number" scale="linear" />
                    <Tooltip />
                    <Bar             
                        dataKey={data}
                        fill="#21299e"
                    />
                </BarChart>
               

                <h3>Weekly</h3>
                <BarChart
                    width={500}
                    height={250}
                    data={weeklyData}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}
                >
                    <XAxis dataKey="week" />
                    <YAxis domain={["dataMin", "dataMax"]} type="number" scale="linear" />
                    <Tooltip />
                    <Bar             
                        dataKey={data}
                        fill="#21299e"
                    />
                </BarChart>
                <ToggleButtonGroup
                exclusive
                value={data}
                            >
                                <ToggleButton value="distance" onClick={()=>setData("distance")}>
                                    Distance
                                </ToggleButton>
                                <ToggleButton value="time" onClick={()=>setData("time")}>
                                    Time
                                </ToggleButton>
                                <ToggleButton value="elevation" onClick={()=>setData("elevation")} >
                                    Elevation
                                </ToggleButton>
                            </ToggleButtonGroup>
            </div>
        );
    }


export default OverviewCharts;