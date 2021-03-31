import React, { useEffect } from 'react';
import { WordCard } from '../../../components/WordCard/WordCard';
import { SectionsButtons } from '../../../components/SectionsButtons/SectionsButtons';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypeSelector';
import { PagesButtons } from '../../../components/PagesButtons/PagesButtons';
import { Settings } from '../../../components/Settings/Settings';
import './SchoolbookPage.scss';

export const SchoolbookPage: React.FC = () => {
    const { error, group, loading, page, words } = useTypedSelector((state) => state.wordCard);
    const { fetchWords } = useActions();
    const indicator = `difficulty-indicator difficulty-indicator--${group + 1}`;
    useEffect(() => {
        fetchWords(page, group);
        return () => {
            console.log('clean');
        };
    }, [page, group]);

    if (loading) {
        return <h1>Loading</h1>;
    }
    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <div className='schoolbook-page-wrapper'>
            <h2>Электронный учебник</h2>
            <div className={indicator}>Группа {group + 1}</div>
            <Settings />
            <SectionsButtons groupPath={'sb'} />
            <PagesButtons page={page} />
            {words.map((word) => (
                <WordCard key={word.id} word={word} />
            ))}
        </div>
    );
};
