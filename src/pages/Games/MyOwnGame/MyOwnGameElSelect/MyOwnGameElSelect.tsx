/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import './MyOwnGameElSelect.scss';

interface iProps {
    letter: string;
    id: number;
    clicked: number[];
    click: (text: string, id: number) => void;
}

export const MyOwnGameElSelect: React.FC<iProps> = ({ letter, id, clicked, click }: iProps) => {
    const [elClass, setElClass] = useState('');
    const [elColor, setElColor] = useState('');
    let timerId: NodeJS.Timeout;

    const clickHandler = () => {
        setElColor('word-el-selected');
        timerId = setTimeout(() => setElColor(''), 500);
        click(letter, id);
    };

    useEffect(() => {
        if (clicked.includes(id)) {
            setElClass('word-ell-disabled');
        } else setElClass('');
        return clearTimeout(timerId);
    }, [clicked, id]);

    return (
        <div className={`game-my-word-el-select ${elClass} ${elColor}`} data-id={id} onClick={clickHandler}>
            {letter}
        </div>
    );
};
