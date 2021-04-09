import React from 'react';
import { AMOUNT_OF_PAGES } from '../../constants/constants';
import { useActions } from '../../hooks/useActions';
import { Word } from '../../types/wordCard';

interface Props {
    page: number;
    setDirection?: React.Dispatch<React.SetStateAction<number>>;
}

export const PagesButtons: React.FC<Props> = ({ page, setDirection }: Props) => {
    const { incWordsPage, decWordsPage } = useActions();

    const decreaseHandler = () => {
        decWordsPage(page, 1);
        setDirection?.(0);
        if (page === AMOUNT_OF_PAGES.MIN) incWordsPage(page, AMOUNT_OF_PAGES.MAX);
    };

    const increaseHandler = () => {
        incWordsPage(page, 1);
        setDirection?.(1);
        if (page === AMOUNT_OF_PAGES.MAX) decWordsPage(page, AMOUNT_OF_PAGES.MAX);
    };

    return (
        <div className='pages-btn-wrapper'>
            <div className='pages-btn-left' onClick={decreaseHandler}></div>
            <span className='pages-btn-current'>{page + 1}</span>
            <div className='pages-btn-right' onClick={increaseHandler}></div>
        </div>
    );
};
