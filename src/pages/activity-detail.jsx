import { useNavigate } from 'react-router-dom';
import { useStream } from '../hooks/useStreams';
import Header from "../components/header"
import Map from '../components/map';
import ActivityDetailCharts from '../components/activity-detail-charts';
import ActivityStats from '../components/activity-stats';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import './page-styles/activity-detail.scss'

const ActivityDetail = ({ activity }) => {

    const navigate = useNavigate();
    const { streamData, isLoaded } = useStream(activity.id)

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
                    {streamData.length !==0 &&
                        <ActivityDetailCharts streamData={streamData} isLoaded={isLoaded} />}
                </div>
            </div>
        </>
    )

}
export default ActivityDetail