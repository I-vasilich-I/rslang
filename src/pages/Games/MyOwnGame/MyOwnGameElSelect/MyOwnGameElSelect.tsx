import React, { useState } from 'react';
import './MyOwnGameElSelect.scss';

interface iProps {
    letter: string;
    select: string;
    click: (text: string) => void;
}

export const MyOwnGameElSelect: React.FC<iProps> = ({ letter, select, click }: iProps) => {
    const [color, setColor] = useState('');
    const clickHndler = () => {
        // setColor('word-el-selected');
        // setTimeout(() => setColor(''), 500);
        click(letter);
    };
    if (select === letter) {
        if (color !== 'word-el-guessed') setColor('word-el-guessed');
    }
    return (
        <div className={`game-my-word-el-select ${color}`} onClick={() => clickHndler()}>
            {letter}
        </div>
    );
};
