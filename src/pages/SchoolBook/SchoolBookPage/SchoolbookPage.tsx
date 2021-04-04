import React, { useEffect } from 'react';
import { WordCard } from '../../../components/WordCard/WordCard';
import { SectionsButtons } from '../../../components/SectionsButtons/SectionsButtons';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypeSelector';
import { PagesButtons } from '../../../components/PagesButtons/PagesButtons';
import { Settings } from '../../../components/Settings/Settings';
import { ALERTS } from '../../../constants/constants';
import { AlertType } from '../../../types/interfaces';
import './SchoolbookPage.scss';

export const SchoolbookPage: React.FC = () => {
    const { error, group, loading, page, words } = useTypedSelector((state) => state.wordCard);
    const { userId, token } = useTypedSelector((state) => state.user);
    const { words: userWords, loading: userWordsLoading, error: userWordsError } = useTypedSelector(
        (state) => state.userWords,
    );
    const { fetchWords, fetchUserWords, SetAlert, SetAlertShown, setWordsError, setUserWordsError } = useActions();

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
        fetchWords(page, group);
        return () => {
            console.log('clean');
        };
    }, [page, group, userWords]);

    useEffect(() => {
        if (error || userWordsError) {
            showAlert(ALERTS.error);
            setWordsError();
            setUserWordsError();
        }
    }, []);

    if (loading || userWordsLoading) {
        return <h1>Loading</h1>;
    }

    return (
        <div className='schoolbook-page-wrapper'>
            <div className={indicator}>Группа {group + 1}</div>
            <h2>Электронный учебник</h2>
            <Settings />
            <SectionsButtons groupPath={'sb'} />
            <PagesButtons page={page} />
            {words
                .filter((elem) => !userWords.find((el) => el.wordId === elem.id && el.difficulty === 'deleted'))
                .map((word) => (
                    <WordCard key={word.id} word={word} />
                ))}
        </div>
    );
};
