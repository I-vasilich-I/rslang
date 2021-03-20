import React from 'react';
import { Navbar } from './Navbar';
import { NavLink } from 'react-router-dom';
import './Header.scss';

export const Header: React.FC = () => {
    return (
        <div className='header-wrapper'>
            <NavLink to='/' className='nav-logo'>
                RSLang
            </NavLink>
            <Navbar />
        </div>
    );
};
