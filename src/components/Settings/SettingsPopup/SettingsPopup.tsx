import React, { useEffect } from 'react';
import './SettingsPopup.scss';

interface Props {
    isPopUpActive: boolean;
    setIsPopUpActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SettingsPopup = ({ isPopUpActive, setIsPopUpActive }: Props): JSX.Element => {
    const handleClick = (e: any) => {
        if (e.target.className === 'popup blackout') setIsPopUpActive(false);
    };
    useEffect(() => {
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    });

    const className = isPopUpActive ? 'popup blackout' : 'popup popup--hidden';
    return (
        <div className={className}>
            <div className='popup__wrapper'>
                <div className='popup__buttons'>
                    <h4>Кнопоки</h4>
                </div>
                <div className='popup__translations'>
                    <h4>Отображение</h4>
                </div>
            </div>
        </div>
    );
};
