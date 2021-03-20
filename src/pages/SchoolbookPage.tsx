import React from 'react';
import { useParams } from 'react-router-dom';

export const SchoolbookPage: React.FC = () => {
    const { id } = useParams<Record<string, string | undefined>>();
    return (
        <div className='schoolbook-page-wrapper'>
            <h1>schoolbook page {id}</h1>
        </div>
    );
};
