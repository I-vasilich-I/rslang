import React from 'react';
import { useTypedSelector } from '../../../hooks/useTypeSelector';
import { useActions } from '../../../hooks/useActions';
import { createUserWord, getUserWords, updateUserWord } from '../../../helpers/helpers';
import { WordToSend } from '../../../types/interfaces';
import { ALERTS } from '../../../constants/constants';
import { AlertType } from '../../../types/interfaces';
import './WordButtons.scss';

interface Props {
    wordId: string;
}

export const WordButtons = ({ wordId }: Props): JSX.Element => {
    const { message, userId, token } = useTypedSelector((state) => state.user);
    const { SetAlert, SetAlertShown } = useActions();
    const isDisabled = () => (message === 'Authenticated' ? false : true);

    const prepareWord = (e: React.BaseSyntheticEvent, oldWord?: WordToSend): WordToSend => {
        const difficulty = e.target.id || '';
        const optional = {
            game1: {
                right: 0,
                wrong: 0,
            },
            game2: {
                right: 0,
                wrong: 0,
            },
            game3: {
                right: 0,
                wrong: 0,
            },
            game4: {
                right: 0,
                wrong: 0,
            },
        };
        if (oldWord) return { difficulty, optional: oldWord.optional };
        return { difficulty, optional };
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
        const difficulty = e.target.id || '';
        const userWords = await getUserWords({ userId, token });
        const userWord = userWords.find((elem) => elem.wordId === wordId);
        if (!userWord) {
            try {
                createUserWord({ userId, wordId, word: { difficulty }, token });
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
