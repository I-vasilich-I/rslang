import React from 'react';
import { NavLink } from 'react-router-dom';
import { Login } from '../Login/Login';
import './Navbar.scss';

export const Navbar: React.FC = () => {
    return (
        <nav>
            <div className='nav-wrapper'>
                <ul className='nav-ul '>
                    <NavLink to='/'>
                        <li className='nav-li button'>Home</li>
                    </NavLink>
                    <NavLink to='/sb/1'>
                        <li className='nav-li button'>Schoolbook</li>
                    </NavLink>
                    <NavLink to='/games'>
                        <li className='nav-li button'>Games</li>
                    </NavLink>
                    <NavLink to='/stat'>
                        <li className='nav-li button'>Stat</li>
                    </NavLink>
                    <NavLink to='/settings'>
                        <li className='nav-li button'>Settings</li>
                    </NavLink>
                </ul>
                <Login />
            </div>
        </nav>
    );
};
