import React from 'react';
import './homepage.scss';

export const HomePage: React.FC = () => {
    return (
        <div className='home-wrapper'>
            <h1>Home</h1>
            <div className='home-advantages'>advantages</div>
            <div className='home-video'>
                <iframe
                    width='1000px'
                    height='530px'
                    src='https://www.youtube.com/embed/NeQM1c-XCDc'
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    title='Video'
                    allowFullScreen={true}
                ></iframe>
            </div>
            <div className='home-about'>about</div>
        </div>
    );
};
