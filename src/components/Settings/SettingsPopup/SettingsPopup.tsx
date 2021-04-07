import React, { useEffect } from 'react';
import { useTypedSelector } from '../../../hooks/useTypeSelector';
import { useActions } from '../../../hooks/useActions';
import './SettingsPopup.scss';

interface Props {
    isPopUpActive: boolean;
    setIsPopUpActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SettingsPopup = ({ isPopUpActive, setIsPopUpActive }: Props): JSX.Element => {
    const { buttons, display } = useTypedSelector((state) => state.settings);
    const { setButtons, setDisplay } = useActions();
    const handleClick = (e: any) => {
        if (e.target.className === 'popup blackout') setIsPopUpActive(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.id === 'buttons') setButtons(!buttons);
        if (e.target.id === 'display') setDisplay(!display);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    });

    const className = isPopUpActive ? 'popup blackout' : 'popup popup--hidden';
    return (
        <div className={className}>
            <div className='popup__wrapper'>
                <h4>Настройки</h4>
                <div className='popup__buttons'>
                    <label htmlFor='buttons'>{`Отоброжать кнопки`}</label>
                    <input type='checkbox' name='buttons' id='buttons' checked={buttons} onChange={handleChange} />
                </div>
                <div className='popup__translations'>
                    <label htmlFor='display'>{`Отоброжать перевод`}</label>
                    <input type='checkbox' name='display' id='display' checked={display} onChange={handleChange} />
                </div>
            </div>
        </div>
    );
};
