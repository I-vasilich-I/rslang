import React from 'react';
import logo from '../../assets/img/rs_school_js.svg';
import gitLogo from '../../assets/img/GitHub_.svg';
import { DEVELOPERS } from '../../constants/constants';
import './Footer.scss';

export const Footer: React.FC = () => {
    return (
        <footer id='footer' className='footer'>
            <div className='footer-wrapper'>
                <a className='footer-logo-box' href='https://rs.school/js/'>
                    <img className='footer-rs-logo' src={logo} alt='rs-logo' />
                </a>
                {DEVELOPERS.map((elem, id) => (
                    <a
                        key={id}
                        className='footer-autor-name'
                        href={elem.git}
                        target='_blank'
                        rel='noreferrer'
                        data-title={elem.name}
                    >
                        <img className='footer-git-logo' src={gitLogo} alt='git-logo' />
                    </a>
                ))}
                <div className='footer-year'>2021</div>
            </div>
        </footer>
    );
};
