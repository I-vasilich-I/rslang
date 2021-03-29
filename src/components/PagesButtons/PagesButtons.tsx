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
            <div className='pages-btn-left' onClick={() => decreaseHandler()}></div>
            <span className='pages-btn-current'>{page + 1}</span>
            <div className='pages-btn-right' onClick={() => increaseHandler()}></div>
        </div>
    );
};
