import React, { useEffect, useState } from 'react';
import './SavanaAccum.scss';

interface iProps {
    id: number;
}
export const SavanaAccum: React.FC<iProps> = ({ id }: iProps) => {
    const [animation, setAnimation] = useState(true);
    useEffect(() => {
        setAnimation(false);
        setTimeout(() => {
            setAnimation((prev) => !prev);
        }, 500);
    }, [id]);
    return (
        <div className='container'>
            <div className={animation ? 'back side' : 'back5 side'}></div>
            <div className={animation ? 'left side' : 'left5 side'}></div>
            <div className={animation ? 'right side' : 'right5 side'}></div>
            <div className={animation ? 'top side' : 'top5 side'}></div>
            <div className={animation ? 'bottom side' : 'bottom5 side'}></div>
            <div className={animation ? 'front side' : 'front5 side'}></div>
        </div>
    );
};
