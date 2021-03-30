import React, { useState } from 'react';
import { SettingsPopup } from './SettingsPopup/SettingsPopup';

export const Settings = (): JSX.Element => {
    const [isPopUpActive, setIsPopUpActive] = useState<boolean>(false);
    const handleClick = () => setIsPopUpActive(true);

    return (
        <>
            <SettingsPopup isPopUpActive={isPopUpActive} setIsPopUpActive={setIsPopUpActive} />
            <button className='settings__title' onClick={handleClick}>
                settings
            </button>
        </>
    );
};
