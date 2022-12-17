import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/header';

import './page-styles/activities.scss'
const Activites = () => {
    const navigate = useNavigate();

    return (
        <div className='activities-container'>
            <Header />
            <>Hellooo</>
        </div>
    );
}

export default Activites;