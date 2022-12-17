import React from 'react';
import { useNavigate } from 'react-router-dom';

const Splash = () => {
    const navigate = useNavigate();

    return (
        <div className='splash-container'>
            <div className='title-container' >
                <div className='title'>WorkIt</div>
                <div className='sub-title'>A workout tracker</div>
            </div>
        </div>
    );
}

export default Splash;