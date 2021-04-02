import React, { useEffect, useState } from 'react';
import { useTypedSelector } from '../../../hooks/useTypeSelector';
import { useActions } from '../../../hooks/useActions';
import { createUserWord, updateUserWord, deleteUserWord } from '../../../helpers/helpers';
import { WordToSend } from '../../../types/interfaces';
import { ALERTS } from '../../../constants/constants';
import { AlertType } from '../../../types/interfaces';
import { useLocation } from 'react-router-dom';
import './WordButtons.scss';

interface Props {
    wordId: string;
}

export const WordButtons = ({ wordId }: Props): JSX.Element => {
    const { message, userId, token } = useTypedSelector((state) => state.user);
    const { words: userWords } = useTypedSelector((state) => state.userWords);
    const [difficulty, setDifficulty] = useState('');
    const { SetAlert, SetAlertShown, fetchUserWords } = useActions();
    const isDisabled = () => (message === 'Authenticated' ? false : true);
    const isDictionaryPage = useLocation<unknown>().pathname.includes('/dict/');

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

    const handleClick = async (e: React.BaseSyntheticEvent) => {
        const userWord = userWords.find((elem) => elem.wordId === wordId);
        if (e.target.id === 'reestablish') {
            try {
                deleteUserWord({ userId, wordId, token });
                showAlert(ALERTS.wordReestablished);
                setDifficulty(e.target.id);
            } catch (e) {
                showAlert({ ...ALERTS.error, message: `Не удалось восcтановить слово: ${e.message}` });
            }
            return;
        }
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

    useEffect(() => {
        if (difficulty === 'deleted' || difficulty === 'reestablish') {
            setDifficulty('');
            fetchUserWords(userId, token);
        }
    }, [difficulty]);

    return (
        <div className='word-btn-wrapper'>
            {isDictionaryPage ? (
                <button
                    className='word-btn-complicated button'
                    id='reestablish'
                    disabled={isDisabled()}
                    onClick={handleClick}
                >
                    восстановить
                    {isDisabled() ? <span className='word-btn-title'>Авторизуйтесь</span> : null}
                </button>
            ) : (
                <>
                    <button
                        className='word-btn-complicated button'
                        id='complicated'
                        disabled={isDisabled()}
                        onClick={handleClick}
                    >
                        в сложные
                        {isDisabled() ? <span className='word-btn-title'>Авторизуйтесь</span> : null}
                    </button>
                    <button
                        className='word-btn-deleted button'
                        id='deleted'
                        disabled={isDisabled()}
                        onClick={handleClick}
                    >
                        в удаленные
                        {isDisabled() ? <span className='word-btn-title'>Авторизуйтесь</span> : null}
                    </button>
                </>
            )}
        </div>
    );
};
