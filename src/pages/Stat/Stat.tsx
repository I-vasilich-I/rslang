import React from 'react';
import { useTypedSelector } from '../../hooks/useTypeSelector';

import './Stat.scss';

export const Stat: React.FC = () => {
    const { dayStat } = useTypedSelector((state) => state.dayStat);
    const audioStat = dayStat.filter((el) => el.name === 'audio');
    const ownStat = dayStat.filter((el) => el.name === 'own');
    const init = 0;
    const audioWrong = audioStat.reduce((acc, current) => acc + current.wrong, init);
    const audioRigth = audioStat.reduce((acc, current) => acc + current.right, init);
    const audioTopLong = audioStat.reduce((a, b) => (a > b.series ? a : b.series), init);
    const audioPersent =
        audioWrong !== 0 && audioRigth !== 0 ? Math.round((audioRigth / (audioRigth + audioWrong)) * 100) : 0;
    const ownWrong = ownStat.reduce((acc, current) => acc + current.wrong, init);
    const ownRigth = ownStat.reduce((acc, current) => acc + current.right, init);
    const ownTopLong = ownStat.reduce((a, b) => (a > b.series ? a : b.series), init);
    const ownPersent = ownWrong !== 0 && ownRigth !== 0 ? Math.round((ownRigth / (ownRigth + ownWrong)) * 100) : 0;
    console.log(audioWrong);
    console.log(audioRigth);
    console.log(audioTopLong);
    return (
        <div className='stat-wrapper'>
            <h1>Stat</h1>
            <div className='stat-current'>
                <p>Current</p>
                <div className='stat-game-title'>savana</div>
                <div className='stat-current-game stat-current-savana'>
                    <span className='stat-current-amount'>amount</span>
                    <span className='stat-current-persent'>persent</span>
                    <span className='stat-current-top-long'>top long</span>
                </div>
                <div className='stat-game-title'>audio</div>
                <div className='stat-current-game stat-current-audio'>
                    <span className='stat-current-amount'>Слов изучено - {audioWrong + audioRigth}</span>
                    <span className='stat-current-persent'>Процент - {audioPersent}</span>
                    <span className='stat-current-top-long'>наибольшая серия - {audioTopLong}</span>
                </div>
                <div className='stat-game-title'>sprint</div>
                <div className='stat-current-game stat-current-sprint'>
                    <span className='stat-current-amount'>amount</span>
                    <span className='stat-current-persent'>persent</span>
                    <span className='stat-current-top-long'>top long</span>
                </div>
                <div className='stat-game-title'>own</div>
                <div className='stat-current-game stat-current-own'>
                    <span className='stat-current-amount'>Слов изучено - {ownWrong + ownRigth}</span>
                    <span className='stat-current-persent'>Процент - {ownPersent}</span>
                    <span className='stat-current-top-long'>наибольшая серия - {ownTopLong}</span>
                </div>
                <div className='stat-game-title'>total</div>
                <div className='stat-current-total'>
                    <span className='stat-current-total-amount'>amount</span>
                    <span className='stat-current-total-persent'>persent</span>
                </div>
            </div>
            <div className='stat-total'>
                <div className='stat-total-amount'> amount graph</div>
                <div className='stat-total-growth'>growth graph</div>
            </div>
        </div>
    );
};
