import React, { useEffect, useState } from 'react';
import { useTypedSelector } from '../../../hooks/useTypeSelector';
import { useActions } from '../../../hooks/useActions';
import { createUserWord, updateUserWord } from '../../../helpers/helpers';
import { WordToSend } from '../../../types/interfaces';
import { ALERTS } from '../../../constants/constants';
import { AlertType } from '../../../types/interfaces';
import './WordButtons.scss';

interface Props {
    wordId: string;
}

export const WordButtons = ({ wordId }: Props): JSX.Element => {
    const { message, userId, token } = useTypedSelector((state) => state.user);
    const { words: userWords, loading: userWordsLoading, error: userWordsError } = useTypedSelector(
        (state) => state.userWords,
    );
    const { SetAlert, SetAlertShown, fetchUserWords } = useActions();
    const isDisabled = () => (message === 'Authenticated' ? false : true);
    const [difficulty, setDifficulty] = useState();

    const prepareWord = (e: React.BaseSyntheticEvent, oldWord?: WordToSend): WordToSend => {
        const difficulty = e.target.id || '';
        setDifficulty(e.target.id || '');
        if (oldWord) return { difficulty, optional: oldWord.optional };
        return { difficulty };
    };

    const showAlert = (alertType: AlertType['name'], timeOut = true): void => {
        SetAlert(alertType);
        SetAlertShown(true);
        if (timeOut) {
            setTimeout(() => {
                SetAlertShown(false);
            }, 1500);
        }
    };

    // useEffect(() => {
    //     console.log(difficulty);
    //     if (difficulty === 'deleted') {
    //         console.log('hi');
    //         fetchUserWords(userId, token);
    //     }
    // }, [difficulty]);

    const handleClick = async (e: React.BaseSyntheticEvent) => {
        const userWord = userWords.find((elem) => elem.wordId === wordId);
        if (!userWord) {
            try {
                createUserWord({ userId, wordId, word: prepareWord(e), token });
                showAlert(ALERTS.wordAdded);
            } catch (e) {
                showAlert({ ...ALERTS.error, message: `Не удалось добавить слово в словарь: ${e.message}` });
            }
        } else {
            try {
                updateUserWord({ userId, wordId, word: prepareWord(e, userWord), token });
                showAlert(ALERTS.wordUpdated);
            } catch (e) {
                showAlert({ ...ALERTS.error, message: `Не удалось обновить слово: ${e.message}` });
            }
        }
    };

    return (
        <div className='word-btn-wrapper'>
            {isDisabled() ? <div className='word-btn-title'>Авторизуйтесь</div> : null}
            <button
                className='word-btn-complicated button'
                id='complicated'
                disabled={isDisabled()}
                onClick={handleClick}
            >
                в сложные
            </button>
            <button className='word-btn-deleted button' id='deleted' disabled={isDisabled()} onClick={handleClick}>
                в удаленные
            </button>
        </div>
    );
};
