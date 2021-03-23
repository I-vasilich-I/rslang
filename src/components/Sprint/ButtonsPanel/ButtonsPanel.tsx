import React from 'react';

import './ButtonsPanel.scss';
import { Button } from './Button/Button';

export const ButtonsPanel: React.FC = () => {
    return (
        <div className='buttons-panel'>
            <Button content='Неверно' correct={false} />
            <Button content='Верно' correct={true} />
        </div>
    );
};
