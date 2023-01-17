import React from 'react';
import Loading from './loading';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    Tooltip,
    LineChart,
    Line,
    ResponsiveContainer
} from "recharts";

import './component-styles/activity-detail-charts.scss'

const ActivityDetailCharts = ({ streamData, isLoaded }) => {

    if (!isLoaded) {
        return <Loading />;
    } else {
        return (
            <div className='chart-container'>
                <div className='chart'>
                    <h3>Elevation</h3>
                    <ResponsiveContainer>
                        <AreaChart
                            // width={600}
                            // height={400}
                            data={streamData}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 50
                            }}
                        >
                            <XAxis dataKey="distance" type="number" domain={["dataMin", "dataMax"]} />
                            <YAxis domain={["dataMin", "dataMax"]} type="number" scale="linear" />
                            <Tooltip />
                            <Area
                            connectNulls
                                type="basis"
                                dataKey="elevation"
                                stroke="none"
                                fill="#666666"
                                strokeWidth={2}
                                dot={false}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div className='chart'>
                    <h3>Heartrate vs Elevation</h3>
                    <ResponsiveContainer>
                        <AreaChart
                                //  width={600}
                                //  height={400}
                            data={streamData}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 50
                            }}
                        >
                            <XAxis dataKey="distance"  type="number" domain={["dataMin", "dataMax"]} />
                            <YAxis yAxisId="left"  domain={["dataMin", "dataMax"]} type="number" scale="linear" />
                            <YAxis yAxisId="right"  orientation="right" domain={["dataMin", "dataMax"]} type="number" scale="linear" />
                            <Tooltip />
                            <Area
                                connectNulls
                                type="basis"
                                dataKey="elevation"
                                stroke="none"
                                fill="#666666"
                                // fillOpacity="1"
                                yAxisId="left"
                                strokeWidth={2}
                            />
                            <Area
                                connectNulls
                                type="basis"
                                dataKey="heartrate"
                                stroke="none"
                                fill="#9e2121"
                                fillOpacity=".7"
                                yAxisId="right"
                                strokeWidth={2}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div className='chart'>
                    <h3>Speed vs Elevation</h3>
                    <ResponsiveContainer>
                        <AreaChart
                                //  width={600}
                                //  height={400}
                            data={streamData}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 70
                            }}
                        >
                            <XAxis dataKey="distance" type="number" domain={["dataMin", "dataMax"]} />
                            <YAxis yAxisId="left" domain={["dataMin", "dataMax"]} type="number" scale="linear" />
                            <YAxis yAxisId="right" orientation="right" domain={["dataMin", "dataMax"]} type="number" scale="linear" />
                            <Tooltip />
                            <Area
                                connectNulls
                                type="basis"
                                dataKey="elevation"
                                stroke="none"
                                fill="#666666"
                                // fillOpacity="1"
                                yAxisId="left"
                                strokeWidth={2}
                            />
                            <Area
                                connectNulls
                                type="basis"
                                dataKey="velocity"
                                stroke="none"
                                fill="#21299e"
                                fillOpacity=".7"
                                yAxisId="right"
                                strokeWidth={2}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
                <div className='chart'>


                    <h3>Heartrate vs Speed</h3>
                    <ResponsiveContainer>

                        <AreaChart
                                //  width={600}
                                //  height={400}
                            data={streamData}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 70
                            }}
                        >
                            <XAxis dataKey="distance" type="number" domain={["dataMin", "dataMax"]} />
                            <YAxis yAxisId="left" domain={["dataMin", "dataMax"]} type="number" scale="linear" />
                            <YAxis yAxisId="right" orientation="right" domain={["dataMin", "dataMax"]} type="number" scale="linear" />
                            <Tooltip />
                            <Area
                                connectNulls
                                type="basis"
                                dataKey="velocity"
                                stroke="none"
                                fill="#21299e"
                                // fillOpacity="1"
                                yAxisId="left"
                                strokeWidth={2}
                            />
                            <Area
                                connectNulls
                                type="basis"
                                dataKey="heartrate"
                                stroke="none"
                                fill="#9e2121"
                                fillOpacity=".8"
                                yAxisId="right"
                                strokeWidth={2}
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </div>
        );
    }
}

export default ActivityDetailCharts;