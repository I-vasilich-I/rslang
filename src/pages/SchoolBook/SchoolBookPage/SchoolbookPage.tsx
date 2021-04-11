import React, { useState, useEffect } from 'react';
import { WordCard } from '../../../components/WordCard/WordCard';
import { SectionsButtons } from '../../../components/SectionsButtons/SectionsButtons';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypeSelector';
import { PagesButtons } from '../../../components/PagesButtons/PagesButtons';
import { Settings } from '../../../components/Settings/Settings';
import { ALERTS, AMOUNT_OF_PAGES } from '../../../constants/constants';
import { AlertType } from '../../../types/interfaces';
import { Word } from '../../../types/wordCard';
import { conditions } from '../../../helpers/helpers';
import Loader from '../../../components/Loader/Loader';
import './SchoolbookPage.scss';

export const SchoolbookPage: React.FC = () => {
    const { error, group, loading, page, words } = useTypedSelector((state) => state.wordCard);
    const { userId, token } = useTypedSelector((state) => state.user);
    const { words: userWords, loading: userWordsLoading, error: userWordsError } = useTypedSelector(
        (state) => state.userWords,
    );
    const {
        fetchWords,
        fetchUserWords,
        SetAlert,
        SetAlertShown,
        setWordsError,
        setUserWordsError,
        incWordsPage,
        decWordsPage,
    } = useActions();
    const [wordsArray, setWordsArray] = useState<Word[] | null>(null);
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
    const [direction, setDirection] = useState(1);

    // exclude deleted words from the page
    useEffect(() => {
        setWordsArray(words.filter((elem) => !userWords.find((el) => conditions(el, elem, 'deleted'))));
    }, [userWords, words]);

    // skip empty pages
    useEffect(() => {
        if (wordsArray?.length === 0) {
            if (direction) {
                incWordsPage(page, 1);
                if (page === AMOUNT_OF_PAGES.MAX) decWordsPage(page, AMOUNT_OF_PAGES.MAX);
            } else {
                decWordsPage(page, 1);
                if (page === AMOUNT_OF_PAGES.MIN) incWordsPage(page, AMOUNT_OF_PAGES.MAX);
            }
        }
    }, [wordsArray]);

    useEffect(() => {
        if (userId && token) {
            fetchUserWords(userId, token);
        }
    }, [userId, token]);

    useEffect(() => {
        fetchWords(page, group);
    }, [page, group]);

    useEffect(() => {
        if (error || userWordsError) {
            showAlert(ALERTS.error);
            setWordsError();
            setUserWordsError();
        }
    }, []);

    if (loading || userWordsLoading) {
        return <Loader />;
    }

    return (
        <div className='schoolbook-page-wrapper'>
            <div className={indicator}>Группа {group + 1}</div>
            <h2>Электронный учебник</h2>
            <Settings />
            <SectionsButtons groupPath={'sb'} />
            <PagesButtons page={page} setDirection={setDirection} />
            {wordsArray?.length ? wordsArray.map((word) => <WordCard key={word.id} word={word} />) : null}
        </div>
    );
};
