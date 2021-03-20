import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar: React.FC = () => {
    return (
        <nav>
            <div className='nav-wrapper'>
                <NavLink to='/' className='nav-logo'>
                    RSLang
                </NavLink>
                <ul className='nav-ul '>
                    <li className='nav-li'>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li className='nav-li'>
                        <NavLink to='/sb/1'>Schoolbook</NavLink>
                    </li>
                    <li className='nav-li'>
                        <NavLink to='/games'>Games</NavLink>
                    </li>
                    <li className='nav-li'>
                        <NavLink to='/stat'>Stat</NavLink>
                    </li>
                    <li className='nav-li'>
                        <NavLink to='/settings'>Settings</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
