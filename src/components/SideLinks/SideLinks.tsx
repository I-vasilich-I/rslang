import React from 'react';
import { useHistory } from 'react-router-dom';

import './SideLinks.scss';

export const SideLinks: React.FC = () => {
    const history = useHistory();
    return (
        <div className='side-links-wrapper'>
            <button className='side-links-btn button' onClick={() => history.push('/savana')}>
                savana
            </button>
            <button className='side-links-btn button' onClick={() => history.push('/audio-challenge')}>
                audio
            </button>
            <button className='side-links-btn button' onClick={() => history.push('/sprint')}>
                sprint
            </button>
            <button className='side-links-btn button' onClick={() => history.push('/my-own')}>
                own
            </button>
            <button className='side-page-btn button' onClick={() => history.push('/dict/learning/1')}>
                Dictionary
            </button>
        </div>
    );
};
