import React from 'react';
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    LineChart,
    Line,
} from "recharts";

const ActivityDetailCharts = ({ streamData, isLoaded }) => {

    if (!isLoaded) {
        return <>LOADING</>;
    } else {
        return (
            <div>
                <h3>Elevation</h3>
                <AreaChart
                    width={600}
                    height={400}
                    data={streamData}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}
                >
                    <XAxis dataKey="distance" label="Miles" type="number" domain={["dataMin", "dataMax"]} />
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
                <h3>Heartrate vs Elevation</h3>
                <AreaChart
                    width={600}
                    height={400}
                    data={streamData}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}
                >
                    <XAxis dataKey="distance" label="Miles" type="number" domain={["dataMin", "dataMax"]} />
                    <YAxis yAxisId="left" label="Ft" domain={["dataMin", "dataMax"]} type="number" scale="linear" />
                    <YAxis yAxisId="right" label="BPM" orientation="right" domain={["dataMin", "dataMax"]} type="number" scale="linear" />
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


                <h3>Speed vs Elevation</h3>
                <AreaChart
                    width={600}
                    height={400}
                    data={streamData}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}
                >
                    <XAxis dataKey="distance" label="Miles" type="number" domain={["dataMin", "dataMax"]} />
                    <YAxis yAxisId="left" label="Ft" domain={["dataMin", "dataMax"]} type="number" scale="linear" />
                    <YAxis yAxisId="right" label="MPH" orientation="right" domain={["dataMin", "dataMax"]} type="number" scale="linear" />
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

                <h3>Heartrate vs Speed</h3>
                <AreaChart
                    width={600}
                    height={400}
                    data={streamData}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                    }}
                >
                    <XAxis dataKey="distance" label="Miles" type="number" domain={["dataMin", "dataMax"]} />
                    <YAxis yAxisId="left" label="Ft" domain={["dataMin", "dataMax"]} type="number" scale="linear" />
                    <YAxis yAxisId="right" label="MPH" orientation="right" domain={["dataMin", "dataMax"]} type="number" scale="linear" />
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
            </div>
        );
    }
}

export default ActivityDetailCharts;