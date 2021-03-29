import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { PagesButtons } from '../../../components/PagesButtons/PagesButtons';
import { SectionsButtons } from '../../../components/SectionsButtons/SectionsButtons';
import { WordCard } from '../../../components/WordCard/WordCard';
import { useActions } from '../../../hooks/useActions';
import { useTypedSelector } from '../../../hooks/useTypeSelector';

export const DictionaryPage: React.FC = () => {
    const { error, group, loading, page, words } = useTypedSelector((state) => state.wordCard);
    const { fetchWords } = useActions();
    const history = useHistory();
    const { id } = useParams<Record<string, string | undefined>>();

    useEffect(() => {
        fetchWords(page, group);
    }, [page, group]);

    if (loading) {
        return <h1>Loading</h1>;
    }
    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <div className='dictionary-page-wrapper'>
            <h1>dictioanry {id}</h1>
            <p className='dictioanry-words-amount'>words amount</p>
            <p className='dictioanry-words-result'>words result</p>

            <button className='dictionary-page-btn' onClick={() => history.push('/dict/learning/1')}>
                learning
            </button>
            <button className='dictionary-page-btn' onClick={() => history.push('/dict/complicated/1')}>
                complicated
            </button>
            <button className='dictionary-page-btn' onClick={() => history.push('/dict/deleted/1')}>
                deleted
            </button>
            <SectionsButtons group={`dict/${id}`} />
            <PagesButtons page={page} />
            {words.map((word) => (
                <WordCard key={word.id} word={word} />
            ))}
        </div>
    );
};
