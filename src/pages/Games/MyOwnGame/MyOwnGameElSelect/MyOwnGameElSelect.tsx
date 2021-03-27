import React, { useState } from 'react';
import './MyOwnGameElSelect.scss';

interface iProps {
    letter: string;
    click: (text: string) => void;
}

export const MyOwnGameElSelect: React.FC<iProps> = ({ letter, click }: iProps) => {
    const [color, setColor] = useState('');
    const clickHndler = () => {
        setColor('word-el-selected');
        setTimeout(() => setColor(''), 500);
        click(letter);
    };

    return (
        <div className={`game-my-word-el-select ${color}`} onClick={() => clickHndler()}>
            {letter}
        </div>
    );
};
