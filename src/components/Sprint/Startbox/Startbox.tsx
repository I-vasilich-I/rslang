import React from 'react';

import './Startbox.scss';

interface StartboxProps {
    onStart: () => void;
}

export const Startbox: React.FC<StartboxProps> = (props: StartboxProps) => {
    const { onStart } = props;

    return (
        <div className='startbox'>
            <span className='startbox__title'>Для начала игры нажмите &#171;Старт&#187;</span>
            <button
                className='startbox__button'
                onClick={() => {
                    onStart();
                }}
            >
                Старт
            </button>
        </div>
    );
};
