import React from 'react';

import './ButtonsPanel.scss';
import { Button } from './Button/Button';

interface ButtonsPanelProps {
    correctClickHandler: () => void;
    incorrectClickHandler: () => void;
}

export const ButtonsPanel: React.FC<ButtonsPanelProps> = (props: ButtonsPanelProps) => {
    const { correctClickHandler, incorrectClickHandler } = props;

    return (
        <div className='buttons-panel'>
            <Button content='Неверно' correct={false} clickHandler={incorrectClickHandler} />
            <Button content='Верно' correct={true} clickHandler={correctClickHandler} />
        </div>
    );
};
