import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { PagesButtons } from '../../../components/PagesButtons/PagesButtons';
import { SectionsButtons } from '../../../components/SectionsButtons/SectionsButtons';
import { WordCard } from '../../../components/WordCard/WordCard';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypeSelector';
import { ALERTS, DICTIONARY_TITLE } from '../../../constants/constants';
import { AlertType, UserWord } from '../../../types/interfaces';
import { Word } from '../../../types/wordCard';

export const DictionaryPage: React.FC = () => {
    const { error, group, loading, page, words } = useTypedSelector((state) => state.wordCard);
    const { words: userWords, loading: userWordsLoading, error: userWordsError } = useTypedSelector(
        (state) => state.userWords,
    );
    const { userId, token } = useTypedSelector((state) => state.user);
    const { fetchWords, fetchUserWords, SetAlert, SetAlertShown, setWordsError, setUserWordsError } = useActions();
    const history = useHistory();
    const { id } = useParams<Record<string, string | undefined>>();
    const indicator = `difficulty-indicator difficulty-indicator--${group + 1}`;

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
    }, [page, group, userWords]);

    useEffect(() => {
        if (userId && token) {
            fetchUserWords(userId, token);
        }
    }, [userId]);

    useEffect(() => {
        if (error || userWordsError) {
            showAlert(ALERTS.error);
            setWordsError();
            setUserWordsError();
        }
    }, []);

    const conditions = (elem1: UserWord, elem2: Word) => {
        if (id === 'learning') return elem1.wordId === elem2.id;
        if (id === 'deleted') return elem1.wordId === elem2.id && elem1.difficulty === 'deleted';
        return elem1.wordId === elem2.id && elem1.difficulty === 'complicated';
    };

    const wordsComponent = words
        .filter((elem) => userWords.find((el) => conditions(el, elem)))
        .map((word) => <WordCard key={word.id} word={word} />);

    if (loading || userWordsLoading) {
        return <h1>Loading</h1>;
    }

    return (
        <div className='dictionary-page-wrapper'>
            <h2>{id && DICTIONARY_TITLE[id]}</h2>
            <div className={indicator}>Группа {group + 1}</div>
            <div className='dictioanry-words-wrapper'>
                <p className='dictioanry-words-amount'>20</p>
                <p className='dictioanry-words-result'>15</p>
            </div>

            <div className='dictionary-btn-wrapper'>
                <button className='dictionary-page-btn button' onClick={() => history.push('/dict/learning/1')}>
                    Изучаемые слова
                </button>
                <button className='dictionary-page-btn button' onClick={() => history.push('/dict/complicated/1')}>
                    Сложные слова
                </button>
                <button className='dictionary-page-btn button' onClick={() => history.push('/dict/deleted/1')}>
                    Удалённые слова
                </button>
            </div>

            <SectionsButtons groupPath={`dict/${id}`} />
            <PagesButtons page={page} />
            {wordsComponent.length ? wordsComponent : null}
        </div>
    );
};
