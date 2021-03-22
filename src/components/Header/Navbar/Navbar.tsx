import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

export const Navbar: React.FC = () => {
    return (
        <nav>
            <div className='nav-wrapper'>
                <ul className='nav-ul '>
                    <li className='nav-li button'>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li className='nav-li button'>
                        <NavLink to='/sb/1'>Schoolbook</NavLink>
                    </li>
                    <li className='nav-li button'>
                        <NavLink to='/games'>Games</NavLink>
                    </li>
                    <li className='nav-li button'>
                        <NavLink to='/stat'>Stat</NavLink>
                    </li>
                    <li className='nav-li button'>
                        <NavLink to='/settings'>Settings</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
