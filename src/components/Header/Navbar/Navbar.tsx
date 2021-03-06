import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Login } from '../Login/Login';
import './Navbar.scss';

export const Navbar: React.FC = () => {
    const [toggle, setToggle] = useState('burger-btn-toggle-off');
    const [toggleMenu, setToggleMenu] = useState('');
    const style = {
        display: toggleMenu,
    };
    let w = window.innerWidth;
    const checkWidth = function () {
        setToggleMenu('flex');
        setToggle('burger-btn-toggle-off');
    };

    useEffect(() => {
        window.addEventListener('resize', () => {
            w = window.innerWidth;
            w > 768 ? checkWidth() : setToggleMenu('none');
            setToggle('burger-btn-toggle-off');
        });
    });

    return (
        <>
            <div
                className={'burger-btn ' + `${toggle}`}
                onClick={() => {
                    setToggle(toggle === 'burger-btn-toggle-off' ? 'burger-btn-toggle-on' : 'burger-btn-toggle-off');
                    setToggleMenu(toggleMenu === ('' || 'flex') ? 'none' : 'flex');
                }}
            >
                <span></span>
            </div>
            <nav>
                <div className='nav-wrapper'>
                    <ul
                        className='nav-ul'
                        style={style}
                        onClick={() => {
                            if (w < 768) {
                                setToggle('burger-btn-toggle-off');
                                setToggleMenu('none');
                            }
                        }}
                    >
                        <li className='nav-li'>
                            <NavLink
                                className='button'
                                to='/'
                                onClick={() => {
                                    if (w < 768) {
                                        setToggle('burger-btn-toggle-off');
                                        setToggleMenu('none');
                                    }
                                }}
                            >
                                ??????????????
                            </NavLink>
                        </li>

                        <li className='nav-li'>
                            <NavLink
                                className='button'
                                to='/sb/1'
                                onClick={() => {
                                    if (w < 768) {
                                        setToggle('burger-btn-toggle-off');
                                        setToggleMenu('none');
                                    }
                                }}
                            >
                                ??????????????
                            </NavLink>
                        </li>

                        <li className='nav-li'>
                            <NavLink
                                className='button'
                                to='/games'
                                onClick={() => {
                                    if (w < 768) {
                                        setToggle('burger-btn-toggle-off');
                                        setToggleMenu('none');
                                    }
                                }}
                            >
                                ????????{' '}
                            </NavLink>
                        </li>

                        <li className='nav-li'>
                            <NavLink
                                className='button'
                                to='/stat'
                                onClick={() => {
                                    if (w < 768) {
                                        setToggle('burger-btn-toggle-off');
                                        setToggleMenu('none');
                                    }
                                }}
                            >
                                ????????????????????
                            </NavLink>
                        </li>
                    </ul>
                    <Login />
                    <a href='#headerTop' className='btn-to-top'></a>
                </div>
            </nav>
        </>
    );
};
