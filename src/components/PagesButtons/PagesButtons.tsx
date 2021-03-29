import React from 'react';
// import { useHistory } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
//import { Button } from '../common/Button';

interface Props {
    page: number;
}

export const PagesButtons: React.FC<Props> = ({ page }: Props) => {
    const { incWordsPage, decWordsPage } = useActions();
    //const history = useHistory();

    const decreaseHandler = () => {
        decWordsPage(page);
    };

    const increaseHandler = () => {
        incWordsPage(page);
    };

    return (
        <div className='pages-btn-wrapper'>
            <button className='pages-btn-left' onClick={decreaseHandler}>
                l
            </button>
            <span className='pages-btn-current'>{page + 1}</span>
            <button className='pages-btn-left' onClick={increaseHandler}>
                r
            </button>
        </div>
    );
};
