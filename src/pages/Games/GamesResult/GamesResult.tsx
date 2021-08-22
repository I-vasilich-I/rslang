import React from 'react';
import { useHistory } from 'react-router-dom';
import { useTypedSelector } from '../../../hooks/useTypeSelector';
import { GamesResultEl } from './GameResultEl/GamesResultEl';
import './GamesResult.scss';

export const GamesResult: React.FC = () => {
    const { gameResults } = useTypedSelector((state) => state.result);
    const history = useHistory();

    const wrongWords = gameResults.filter((el) => el.game.wrong === 1);
    const correctWords = gameResults.filter((el) => el.game.right === 1);
    return (
        <div className='game-result-wrapper'>
            <h1>Результаты</h1>
            <GamesResultEl title={'Ошибок'} count={wrongWords.length} words={wrongWords} />
            <GamesResultEl title={'Знаю'} count={correctWords.length} words={correctWords} />
            <button className='game-result-back' onClick={() => history.push('games')}>
                Назад
            </button>
        </div>
    );
};
