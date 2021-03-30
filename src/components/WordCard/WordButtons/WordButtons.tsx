import React from 'react';
import { useTypedSelector } from '../../../hooks/useTypeSelector';
import { createUserWord, getUserWord, updateUserWord } from '../../../helpers/helpers';
import { WordToSend } from '../../../types/interfaces';
import './WordButtons.scss';

interface Props {
    wordId: string;
}

export const WordButtons = ({ wordId }: Props): JSX.Element => {
    const { message, userId, token } = useTypedSelector((state) => state.user);
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

        return { difficulty, optional: oldWord ? oldWord.optional : optional };
    };

    const handleClick = async (e: React.BaseSyntheticEvent) => {
        if (!wordId) return;
        try {
            const userWord = await getUserWord({ userId, wordId, token });
            if (!userWord) {
                try {
                    createUserWord({ userId, wordId, word: prepareWord(e), token });
                    // alert success
                } catch (e) {
                    console.error(e);
                    // alert failure
                }
            } else {
                try {
                    updateUserWord({ userId, wordId, word: prepareWord(e, userWord), token });
                    // alert success
                } catch (e) {
                    console.error(e);
                    // alert failure
                }
            }
        } catch (error) {
            console.error(error);
            // alert failure
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
