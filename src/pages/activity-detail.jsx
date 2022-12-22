import { useNavigate } from 'react-router-dom';
import { useStream } from '../hooks/useStreams';
import Header from "../components/header"
import Map from '../components/map';
import LineChart from '../components/line-chart';
import ActivityStats from '../components/activity-stats';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import './page-styles/activity-detail.scss'

const ActivityDetail = ({ activity }) => {

    const navigate = useNavigate();
    const { elevation, distance, heartrate, velocity, isLoaded } = useStream(activity.id)

    console.log(distance)

    return (
        <>
            <Header />
            <div className='activity-detail-container'>
                <div className='activity-detail-card'>
                    <div className='title'>
                        <ArrowBackIcon onClick={() => navigate('/activities')} />
                        <h3>{activity.name}</h3>
                    </div>
                    <ActivityStats activity={activity} />
                    <div className='map-container'>
                        {activity.map.summary_polyline !== "" &&
                            <Map activity={activity} />}
                    </div>
                    <div className='chart-container'>
                        <LineChart category={distance} data={elevation} name={"Elevation"} xaxis={"Distance"} yaxis={"Feet"} isLoaded={isLoaded} />
                        <LineChart category={distance} data={heartrate} name={"Heartrate"} xaxis={"Distance"} yaxis={"BPM"} isLoaded={isLoaded} />
                        <LineChart category={distance} data={velocity} name={"Speed"} xaxis={"Distance"} yaxis={"MPH"} isLoaded={isLoaded} />
                    </div>
                </div>
            </div>
        </>
    )

}
export default ActivityDetail