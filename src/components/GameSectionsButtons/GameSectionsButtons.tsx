import React from 'react';
import { useActions } from '../../hooks/useActions';

export const GameSectionsButtons: React.FC = () => {
    const { setWordsGroup, setWordsPage } = useActions();
    const buttonsArray: string[] = new Array(6).fill('');

    const clickHandler = (idx: number) => {
        setWordsGroup(idx);
        setWordsPage(0);
    };

    return (
        <div className='sections-btn-wrapper'>
            {buttonsArray.map((_, idx: number) => (
                <div className='sections-btn-wrapper-btn' key={idx} onClick={() => clickHandler(idx)}>
                    {idx + 1}
                </div>
            ))}
        </div>
    );
};
