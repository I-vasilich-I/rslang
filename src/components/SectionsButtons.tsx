import React from 'react';
import { useHistory } from 'react-router-dom';

interface Props {
    page: string;
}

export const SectionsButtons: React.FC<Props> = ({ page }: Props) => {
    const history = useHistory();
    return (
        <div className='sections-btn-wrapper'>
            <button className='sections-btn-wrapper-btn' onClick={() => history.push(`/${page}/1`)}>
                1
            </button>
            <button className='sections-btn-wrapper-btn' onClick={() => history.push(`/${page}/2`)}>
                2
            </button>
            <button className='sections-btn-wrapper-btn' onClick={() => history.push(`/${page}/3`)}>
                3
            </button>
            <button className='sections-btn-wrapper-btn' onClick={() => history.push(`/${page}/4`)}>
                4
            </button>
            <button className='sections-btn-wrapper-btn' onClick={() => history.push(`/${page}/5`)}>
                5
            </button>
            <button className='sections-btn-wrapper-btn' onClick={() => history.push(`/${page}/6`)}>
                6
            </button>
        </div>
    );
};
