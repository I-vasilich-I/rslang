import React from 'react';
import { UserWord } from '../../../types/interfaces';
import './WordGamesStats.scss';

interface Props {
    wordId: string;
    userWord: UserWord | null;
}

export const WordGamesStats = ({ userWord }: Props): JSX.Element => {
    const stat = {
        game1: userWord?.optional?.game1,
        game2: userWord?.optional?.game2,
        game3: userWord?.optional?.game3,
        game4: userWord?.optional?.game4,
    };
    return (
        <>
            <div className='word-game__title'>Статистика по слову в играх:</div>
            <div className='word-games-wrapper'>
                <div className='word-game word-savana'>
                    <span> Саванна: </span>
                    <span className='right'>{stat.game1?.right || 0}</span>
                    <span> / </span>
                    <span className='wrong'>{stat.game1?.wrong || 0}</span>
                </div>
                <div className='word-game word-audio'>
                    <span> Аудиовызов: </span>
                    <span className='right'>{stat.game2?.right || 0}</span>
                    <span> / </span>
                    <span className='wrong'>{stat.game2?.wrong || 0}</span>
                </div>
                <div className='word-game word-sprint'>
                    <span> Спринт: </span>
                    <span className='right'>{stat.game3?.right || 0}</span>
                    <span> / </span>
                    <span className='wrong'>{stat.game3?.wrong || 0}</span>
                </div>
                <div className='word-game word-own'>
                    <span> Конструктор: </span>
                    <span className='right'>{stat.game4?.right || 0}</span>
                    <span> / </span>
                    <span className='wrong'>{stat.game4?.wrong || 0}</span>
                </div>
            </div>
        </>
    );
};
