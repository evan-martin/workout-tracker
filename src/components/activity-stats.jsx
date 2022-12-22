import React from 'react';
import SpeedIcon from '@mui/icons-material/Speed';
import StraightenIcon from '@mui/icons-material/Straighten';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import BoltIcon from '@mui/icons-material/Bolt';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TerrainIcon from '@mui/icons-material/Terrain';

import './component-styles/activity-stats.scss'

const ActivityStats = ({ activity }) => {

    const toTime = (seconds) => {
        let tempSeconds = seconds
        const hours = Math.floor(tempSeconds / 3600)
        const minutes = Math.floor((tempSeconds %= 3600) / 60)
        const formattedSeconds = tempSeconds %= 60
        if (seconds > 3600) {
            return hours + 'h ' + minutes + 'm'
        } else {
            return minutes + 'm ' + formattedSeconds + 's'
        }
    }


    return (
        <div className='activity-stats-container'>
            {activity.distance !== 0 &&
                <div className='activity-stats-card'>
                    <div>
                        <h2> {(activity.distance / 1609.34).toFixed(2)} mi</h2>
                        <p>Distance</p>
                    </div>
                    <div className='icon'>
                        <StraightenIcon fontSize='large' />
                    </div>
                </div>
            }
            {activity.average_speed !== 0 &&
                <div className='activity-stats-card'>
                    <div>
                        <h2>{(activity.average_speed * 2.237).toFixed(1)} mph</h2>
                        <p>Average Speed</p>
                    </div>
                    <div className='icon'>
                        <SpeedIcon fontSize='large' />
                    </div>
                </div>
            }
            {activity.max_speed !== 0 &&
                <div className='activity-stats-card'>
                    <div>

                        <h2>{(activity.max_speed * 2.237).toFixed(1)} mph</h2>
                        <p>Max Speed</p>
                    </div>
                    <div className='icon'>
                        <SpeedIcon fontSize='large' />
                    </div>
                </div>
            }
            {activity.moving_time !== 0 &&
                <div className='activity-stats-card'>
                    <div>
                        <h2>{toTime(activity.moving_time)}</h2>
                        <p>Moving Time</p>
                    </div>
                    <div className='icon'>
                        <AccessTimeIcon fontSize='large' />
                    </div>
                </div>
            }
            {activity.elapsed_time !== 0 &&
                <div className='activity-stats-card'>
                    <div>
                        <h2>{toTime(activity.elapsed_time)}</h2>
                        <p>Total Time</p>
                    </div>
                    <div className='icon'>
                        <AccessTimeIcon fontSize='large' />
                    </div>
                </div>
            }
            {activity.total_elevation_gain !== 0 &&
                <div className='activity-stats-card'>
                    <div>
                        <h2>{(activity.total_elevation_gain * 3.28).toFixed(0)} ft</h2>
                        <p>Climb</p>
                    </div>
                    <div className='icon'>
                        <TerrainIcon fontSize='large' />
                    </div>
                </div>
            }
            {activity.average_temp !== undefined &&
                <div className='activity-stats-card'>
                    <div>
                        <h2>
                            {(activity.average_temp * (9 / 5) + 32).toFixed(0)} &#8457;</h2>
                        <p>Average Temp</p>
                    </div>
                    <div className='icon'>
                        <ThermostatIcon fontSize='large' />
                    </div>
                </div>
            }
            {activity.average_watts !== undefined &&
                <div className='activity-stats-card'>
                    <div>
                        <h2>{activity.average_watts} W</h2>
                        <p>Average Power</p>
                    </div>
                    <div className='icon'>
                        <BoltIcon fontSize='large' />
                    </div>
                </div>
            }
            {activity.kilojoules !== undefined &&
                <div className='activity-stats-card'>
                    <div>
                        <h2>{activity.kilojoules} kj</h2>
                        <p>Energy Output</p>
                    </div>
                    <div className='icon'>
                        <BoltIcon fontSize='large' />
                    </div>
                </div>
            }
            {activity.average_heartrate !== undefined &&
                <div className='activity-stats-card'>
                    <div>
                        <h2>{(activity.average_heartrate).toFixed(0)} bpm</h2>
                        <p>Average Heartrate</p>
                    </div>
                    <div className='icon'>
                        <FavoriteIcon fontSize='large' />
                    </div>
                </div>
            }
            {activity.max_heartrate !== undefined &&
                <div className='activity-stats-card'>
                    <div>
                        <h2>{(activity.max_heartrate).toFixed(0)} bpm</h2>
                        <p>Max Heartrate</p>
                    </div>
                    <div className='icon'>
                        <FavoriteIcon fontSize='large' />
                    </div>
                </div>
            }
        </div>
    );

}

export default ActivityStats;