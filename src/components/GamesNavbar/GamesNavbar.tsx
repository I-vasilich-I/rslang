import React from 'react';
import { NavLink } from 'react-router-dom';

export const GamesNavbar: React.FC = () => {
    return (
        <nav>
            <ul className='games-nav-ul '>
                <li className='games-nav-li'>
                    <NavLink to='/games/savana'>Savana</NavLink>
                </li>
                <li className='games-nav-li'>
                    <NavLink to='/games/audio-challenge'>Audio challenge</NavLink>
                </li>
                <li className='games-nav-li'>
                    <NavLink to='/games/sprint'>Sprint</NavLink>
                </li>
                <li className='games-nav-li'>
                    <NavLink to='/games/my-own'>My own game</NavLink>
                </li>
            </ul>
        </nav>
    );
};
