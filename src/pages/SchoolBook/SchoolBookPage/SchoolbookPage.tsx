import React, { useEffect } from 'react';
import { WordCard } from '../../../components/WordCard/WordCard';
import { SectionsButtons } from '../../../components/SectionsButtons/SectionsButtons';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypeSelector';
import { PagesButtons } from '../../../components/PagesButtons/PagesButtons';
import './SchoolbookPage.scss';

export const SchoolbookPage: React.FC = () => {
    const { error, group, loading, page, words } = useTypedSelector((state) => state.wordCard);
    const { fetchWords } = useActions();

    useEffect(() => {
        fetchWords(page, group);
        // return () => {
        //     console.log('clean');
        // };
    }, [page, group]);

    if (loading) {
        return <h1>Loading</h1>;
    }
    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <div className='schoolbook-page-wrapper'>
            <h1>Электронный учебник</h1>
            <SectionsButtons group={'sb'} />
            <PagesButtons page={page} />
            <div className='words__container'>
                {words.map((word) => (
                    <WordCard key={word.id} word={word} />
                ))}
            </div>
        </div>
    );
};
