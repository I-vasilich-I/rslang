import React from 'react';
import './MyOwnGameEl.scss';

interface iProps {
    letter: string;
}

export const MyOwnGameEl: React.FC<iProps> = ({ letter }: iProps) => {
    return (
        <div className='game-my-word-el'>
            <span>{letter}</span>
        </div>
    );
};
