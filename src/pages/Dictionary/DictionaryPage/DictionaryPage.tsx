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
        return <h2>Loading</h2>;
    }
    if (error) {
        return <h2>{error}</h2>;
    }

    return (
        <div className='dictionary-page-wrapper'>
            <h2>dictioanry {id}</h2>
            <div className='dictioanry-words-wrapper'>
                <p className='dictioanry-words-amount'>20</p>
                <p className='dictioanry-words-result'>15</p>
            </div>

            <div className='dictionary-btn-wrapper'>
                <button className='dictionary-page-btn button' onClick={() => history.push('/dict/learning/1')}>
                    learning
                </button>
                <button className='dictionary-page-btn button' onClick={() => history.push('/dict/complicated/1')}>
                    complicated
                </button>
                <button className='dictionary-page-btn button' onClick={() => history.push('/dict/deleted/1')}>
                    deleted
                </button>
            </div>

            <SectionsButtons groupPath={`dict/${id}`} />
            <PagesButtons page={page} />
            {words.map((word) => (
                <WordCard key={word.id} word={word} />
            ))}
        </div>
    );
};
