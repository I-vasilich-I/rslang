import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import './Games.scss';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useActions';
import { GameSectionsButtons } from '../../components/GameSectionsButtons/GameSectionsButtons';

export const Games: React.FC = () => {
    const { loading, group, page, error } = useTypedSelector((state) => state.wordCard);
    const { fetchWords } = useActions();
    const history = useHistory();

    useEffect(() => {
        fetchWords(page, group);
        // setOriginalWord(words[0].word.split(''));
    }, [page, group]);

    if (loading) {
        return <h1>Loading</h1>;
    }
    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <div className='games-wrapper'>
            <GameSectionsButtons />
            <div className='games-title'>Игры группа {group + 1}</div>
            <div className='games-el-wrapper'>
                <div className='games-el' onClick={() => history.push('savana')}>
                    savana
                </div>
                <div className='games-el' onClick={() => history.push('audio-challenge')}>
                    audio-challenge
                </div>
                <div className='games-el' onClick={() => history.push('sprint')}>
                    sprint
                </div>
                <div className='games-el' onClick={() => history.push('my-own')}>
                    my
                </div>
            </div>
        </div>
    );
};
