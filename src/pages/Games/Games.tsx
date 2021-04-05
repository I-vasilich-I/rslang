import React, { useEffect } from 'react';

import { useHistory } from 'react-router-dom';

import './Games.scss';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useActions';
import { GameSectionsButtons } from '../../components/GameSectionsButtons/GameSectionsButtons';
import Loader from '../../components/Loader/Loader';
import { ALERTS } from '../../constants/constants';
import { AlertType } from '../../types/interfaces';

export const Games: React.FC = () => {
    const { loading, group, page, error } = useTypedSelector((state) => state.wordCard);
    const { fetchWords, SetAlert, SetAlertShown } = useActions();
    const history = useHistory();
    const indicator = `games-title difficulty-indicator--${group + 1}`;

    const showAlert = (alertType: AlertType['name'], timeOut = false): void => {
        SetAlert(alertType);
        SetAlertShown(true);
        if (timeOut) {
            setTimeout(() => {
                SetAlertShown(false);
            }, 1500);
        }
    };

    useEffect(() => {
        fetchWords(page, group);
        // setOriginalWord(words[0].word.split(''));
    }, [page, group]);

    useEffect(() => {
        if (error) {
            showAlert(ALERTS.error);
        }
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <div className='games-wrapper'>
            <GameSectionsButtons />
            <div className={indicator}>Игры группы {group + 1}</div>
            <div className='games-el-wrapper'>
                <div className='games-el' onClick={() => history.push('savana')}>
                    Саванна
                </div>
                <div className='games-el' onClick={() => history.push('audio-challenge')}>
                    Аудиовызов
                </div>
                <div className='games-el' onClick={() => history.push('sprint')}>
                    Спринт
                </div>
                <div className='games-el' onClick={() => history.push('my-own')}>
                    Конструктор слов
                </div>
            </div>
        </div>
    );
};
