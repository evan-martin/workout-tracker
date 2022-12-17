import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.png'

import './component-styles/header.scss'

const Header = () => {
    const navigate = useNavigate();

    return (
        <div className='header-container'>
            <div className='logo-container'>
                <img src={Logo} alt='logo' className='logo' />
                <div className='logo-title'>WorkIt</div>
            </div>
            <div className='navigation'>
                <p>Activities</p>
                <p>Overview</p>
            </div>
        </div>
    );
}

export default Header;