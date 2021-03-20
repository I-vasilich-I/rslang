import React from 'react';
import { useParams } from 'react-router-dom';
import { WordCard } from '../components/WordCard/WordCard';
import { SectionsButtons } from '../components/SectionsButtons/SectionsButtons';

export const SchoolbookPage: React.FC = () => {
    const { id } = useParams<Record<string, string | undefined>>();
    const cards: number[] = new Array(20).fill(null); //del
    const pages: number = parseInt(id ? id : '0'); //del
    return (
        <div className='schoolbook-page-wrapper'>
            <h1>schoolbook page {id}</h1>
            <SectionsButtons page={'sb'} />
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
