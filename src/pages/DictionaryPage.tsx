import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { SectionsButtons } from '../components/SectionsButtons';
import { WordCard } from '../components/WordCard';

export const DictionaryPage: React.FC = () => {
    const history = useHistory();
    const { id } = useParams<Record<string, string | undefined>>();

    const cards: number[] = new Array(20).fill(null); //del
    const pages: number = parseInt(id ? id : '0'); //del

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
            <SectionsButtons page={`dict/${id}`} />
            {cards.map((el, idx) => (
                <WordCard key={idx} name={((pages - 1) * 20 + idx + 1).toString()} />
            ))}
            <div className='schoolbook-pages-wrapper'>
                <button className='schoolbook-pages-left'> l </button>
                <span className='schoolbook-pages-current'>current</span>
                <button className='schoolbook-pages-left'> r </button>
            </div>
        </div>
    );
};
