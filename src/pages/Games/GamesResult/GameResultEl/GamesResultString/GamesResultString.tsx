import React from 'react';
import './GamesResultString.scss';
import { Word } from '../../../../../types/wordCard';
import { Howl } from 'howler';
import { BACKEND_API_URL } from '../../../../../constants/constants';
import { GameResult } from '../../../../../types/gameResult';

interface iProps {
    word: GameResult;
}
export const GamesResultString: React.FC<iProps> = ({ word }: iProps) => {
    const playHandler = () => {
        const sound = new Howl({
            src: [`${BACKEND_API_URL}${word.resultWord.audio}`],
        });
        sound.playing() ? sound.stop() : sound.play();
    };
    return (
        <div className='game-result-body'>
            <button className='game-result-sound' onClick={playHandler}>
                sound
            </button>
            <div className='game-result-word'>{word.resultWord.word}</div>
            <div className='game-result-translate'>{word.resultWord.wordTranslate}</div>
        </div>
    );
};
