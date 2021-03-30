import React from 'react';
import { useActions } from '../../hooks/useActions';

interface Props {
    page: number;
}

export const PagesButtons: React.FC<Props> = ({ page }: Props) => {
    const { incWordsPage, decWordsPage } = useActions();

    const decreaseHandler = () => {
        decWordsPage(page);
    };

    const increaseHandler = () => {
        incWordsPage(page);
    };

    return (
        <div className='pages-btn-wrapper'>
            <div className='pages-btn-left' onClick={decreaseHandler}></div>
            <span className='pages-btn-current'>{page + 1}</span>
            <div className='pages-btn-right' onClick={increaseHandler}></div>
        </div>
    );
};
