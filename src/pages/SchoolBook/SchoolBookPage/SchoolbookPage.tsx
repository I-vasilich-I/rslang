import React, { useEffect, useState } from 'react';
import { WordCard } from '../../../components/WordCard/WordCard';
import { SectionsButtons } from '../../../components/SectionsButtons/SectionsButtons';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypeSelector';
import { PagesButtons } from '../../../components/PagesButtons/PagesButtons';
import { Settings } from '../../../components/Settings/Settings';
import { getUserWords } from '../../../helpers/helpers';
import './SchoolbookPage.scss';
import { UserWord } from '../../../types/interfaces';
import { Word } from '../../../types/wordCard';
import { ALERTS } from '../../../constants/constants';
import { AlertType } from '../../../types/interfaces';

export const SchoolbookPage: React.FC = () => {
    const { error, group, loading, page, words } = useTypedSelector((state) => state.wordCard);
    const { userId, token } = useTypedSelector((state) => state.user);
    const { words: userWords, loading: userWordsLoading, error: userWordsError } = useTypedSelector(
        (state) => state.userWords,
    );
    const { fetchWords, fetchUserWords, SetAlert, SetAlertShown, setWordsError, setUserWordsError } = useActions();
    const [filteredWords, setFilteredWords] = useState<Word[]>([]);

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
        if (userId && token) {
            fetchUserWords(userId, token);
        }
    }, [userId]);

    useEffect(() => {
        setFilteredWords(
            words.filter((elem) => !userWords.find((el) => el.wordId === elem.id && el.difficulty === 'deleted')),
        );
    }, [userWords]);

    useEffect(() => {
        fetchWords(page, group);
        return () => {
            console.log('clean');
        };
    }, [page, group]);

    useEffect(() => {
        if (error || userWordsError) {
            showAlert(ALERTS.error);
            setWordsError();
            setUserWordsError();
        }
    }, []);

    const wordsComponent = userWords?.length
        ? filteredWords.map((word) => <WordCard key={word.id} word={word} />)
        : words.map((word) => <WordCard key={word.id} word={word} />);

    if (loading || userWordsLoading) {
        return <h1>Loading</h1>;
    }

    return (
        <div className='schoolbook-page-wrapper'>
            <h2>Электронный учебник</h2>
            <div className={indicator}>Группа {group + 1}</div>
            <Settings />
            <SectionsButtons groupPath={'sb'} />
            <PagesButtons page={page} />
            {wordsComponent}
        </div>
    );
};
