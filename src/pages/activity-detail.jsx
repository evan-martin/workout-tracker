import { useNavigate } from 'react-router-dom';
import { useStream } from '../hooks/useStreams';
import Header from "../components/header"
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

                </div>
            </div>
        </>
    )

}
export default ActivityDetail