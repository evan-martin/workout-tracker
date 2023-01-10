import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/gear.svg'

import './component-styles/header.scss'

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className='header-container'>
            <div className='logo-container' onClick={() => navigate('/activities')}>
                <img src={Logo} alt='logo' className='logo' />
                <div className='logo-title'>sendIt</div>
            </div>
            <div className='navigation'>
                <p onClick={() => navigate('/activities')}>Activities</p>
                <p onClick={() => navigate('/overview')}>Overview</p>
            </div>
        </div>
    );
}

export default Header;