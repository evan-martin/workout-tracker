import { useNavigate } from 'react-router-dom';
import Header from "../components/header"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import './page-styles/activity-detail.scss'

const ActivityDetail = ({ activity }) => {

    const navigate = useNavigate();

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