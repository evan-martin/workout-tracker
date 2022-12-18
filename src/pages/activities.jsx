import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';

import './page-styles/activities.scss'
const Activites = ({data}) => {
    const navigate = useNavigate();

    return (
        <div className='activities-container'>
            <Header />
            {data.map((activity) => (    
                <div key={activity.id}>{activity.name}</div>
                ))}
        </div>
    )
}

export default Activites;