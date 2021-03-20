import React from 'react';
import { useParams } from 'react-router-dom';

export const DictionaryPage: React.FC = () => {
    const { id } = useParams<Record<string, string | undefined>>();
    return (
        <div className='dictionary-page-wrapper'>
            <h1>dictioanry {id}</h1>
        </div>
    );
};
