import React from 'react';
import { Navbar } from './Navbar/Navbar';
import { NavLink } from 'react-router-dom';
import './Header.scss';

export const Header: React.FC = () => {
    return (
        <header className='header' id='headerTop'>
            <div className='header-wrapper'>
                <NavLink to='/' className='nav-logo'>
                    <h2>
                        <span>RS</span>Lang
                    </h2>
                </NavLink>
                <Navbar />
            </div>
        </header>
    );
};
