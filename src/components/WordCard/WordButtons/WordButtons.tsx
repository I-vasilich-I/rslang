import React from 'react';
import { useTypedSelector } from '../../../hooks/useTypeSelector';
import './WordButtons.scss';

export const WordButtons: React.FC = () => {
    const { message } = useTypedSelector((state) => state.user);
    const isDisabled = () => (message === 'Authenticated' ? false : true);
    return (
        <div className='word-btn-wrapper'>
            {isDisabled() ? <div className='word-btn-title'>Авторизуйтесь</div> : null}
            <button className='word-btn-complicated' disabled={isDisabled()}>
                в сложные слова
            </button>
            <button className='word-btn-deleted' disabled={isDisabled()}>
                в удаленные слова
            </button>
        </div>
    );
};
