import React from 'react';

import logo from '../assets/img/rs_school_js.svg';
import gitLogo from '../assets/img/github.svg';
import './Footer.scss';

export const Footer: React.FC = () => {
    return (
        <footer id='footer' className='footer-wrapper'>
            <a className='footer-logo-box' href='https://rs.school/js/'>
                <img className='footer-rs-logo' src={logo} alt='rs-logo' />
            </a>
            <a className='footer-autor-name' href='https://github.com/nimlu-bot'>
                <img className='footer-git-logo' src={gitLogo} alt='git-logo' />
                Nimlu-bot
            </a>
            <a className='footer-autor-name' href='https://github.com/I-vasilich-I'>
                <img className='footer-git-logo' src={gitLogo} alt='git-logo' />
                Oleg
            </a>
            <a className='footer-autor-name' href='https://github.com/I-vasilich-I'>
                <img className='footer-git-logo' src={gitLogo} alt='git-logo' />
                Lex
            </a>
            <a className='footer-autor-name' href='https://github.com/tone4ka'>
                <img className='footer-git-logo' src={gitLogo} alt='git-logo' />
                tone4ka
            </a>
            <a className='footer-autor-name' href='https://github.com/Mikulich-Fedor'>
                <img className='footer-git-logo' src={gitLogo} alt='git-logo' />
                Mikulich-Fedor
            </a>

            <div className='footer-year'>2021</div>
        </footer>
    );
};
