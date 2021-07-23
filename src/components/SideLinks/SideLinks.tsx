import React from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './SideLinks.scss';

export const SideLinks: React.FC = () => {
    const isDictionaryPage = useLocation<unknown>().pathname.includes('/dict/');
    const history = useHistory();
    return (
        <div className='side-links-wrapper'>
            <button className='side-links-btn button' onClick={() => history.push('/savana')}>
                Саванна
            </button>
            <button className='side-links-btn button' onClick={() => history.push('/audio-challenge')}>
                Аудиовызов
            </button>
            <button className='side-links-btn button' onClick={() => history.push('/sprint')}>
                Спринт
            </button>
            <button className='side-links-btn button' onClick={() => history.push('/my-own')}>
                Конструктор
            </button>
            {isDictionaryPage ? (
                <button className='side-page-btn button' disabled></button>
            ) : (
                <button className='side-page-btn button' onClick={() => history.push('/dict/learning/1')}>
                    Словарь
                </button>
            )}
        </div>
    );
};
