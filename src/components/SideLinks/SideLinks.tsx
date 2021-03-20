import React from 'react';
import { useHistory } from 'react-router-dom';

import './SideLinks.scss';

export const SideLinks: React.FC = () => {
    const history = useHistory();
    return (
        <div className='side-links-wrapper'>
            <button className='side-links-btn' onClick={() => history.push('/games/savana')}>
                savana
            </button>
            <button className='side-links-btn' onClick={() => history.push('/games/audio-challenge')}>
                audio
            </button>
            <button className='side-links-btn' onClick={() => history.push('/games/sprint')}>
                sprint
            </button>
            <button className='side-links-btn' onClick={() => history.push('/games/my-own')}>
                own
            </button>
            <button className='side-page-btn' onClick={() => history.push('/dict/learning/1')}>
                Dictionary
            </button>
        </div>
    );
};