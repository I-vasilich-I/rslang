import React from 'react';
import { GameStat } from '../../components/GameStat/GameStat';
import { useTypedSelector } from '../../hooks/useTypeSelector';

import './Stat.scss';

const DAY_IN_MILISECONDS = 86400000;

export const Stat: React.FC = () => {
    const { dayStat } = useTypedSelector((state) => state.dayStat);
    const filterStat = dayStat.filter((el) => Date.now() - el.date <= DAY_IN_MILISECONDS);
    const audioStat = filterStat.filter((el) => el.name === 'audio');
    const ownStat = filterStat.filter((el) => el.name === 'own');
    const sprintStat = filterStat.filter((el) => el.name === 'sprint');
    const savanaStat = filterStat.filter((el) => el.name === 'savana');

    return (
        <div className='stat-wrapper'>
            <h1>Статистика</h1>
            <div className='stat-current'>
                <p>За день</p>
                <GameStat game={'savana'} el={savanaStat} />
                <GameStat game={'audio'} el={audioStat} />
                <GameStat game={'sprint'} el={sprintStat} />
                <GameStat game={'own'} el={ownStat} />
                <GameStat game={'total'} el={filterStat} />
            </div>
            <div className='stat-total'>
                <p>Долгосрочная</p>
                <div className='stat-total-wrapper'>
                    <div className='stat-total-amount'> amount graph</div>
                    <div className='stat-total-growth'>growth graph</div>
                </div>
            </div>
        </div>
    );
};
