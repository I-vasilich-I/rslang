import React, { useEffect, useState } from 'react';
import './SavanaEl.scss';

interface iProps {
    word: string;
}
export const SavanaEl: React.FC<iProps> = ({ word }: iProps) => {
    const [animation, setAnimation] = useState(true);
    useEffect(() => {
        setAnimation(false);
        setTimeout(() => {
            setAnimation((prev) => !prev);
        }, 1);
    }, [word]);
    return <div className={animation ? 'game-savana-word bounce' : 'game-savana-word'}>{word}</div>;
};
