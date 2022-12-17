import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png'

import './page-styles/splash.scss'

const Splash = () => {
    const navigate = useNavigate();

    return (
        <div className='splash-container'>
            <img src={Logo} alt='beep' className='logo' />
            <div className='title-container' >
                <div className='title'>WorkIt</div>
                <div className='sub-title'>A workout tracker and data visualizer</div>
                <button className='outlined-button'>Enter</button>
            </div>

        </div>
    );
}

export default Splash;