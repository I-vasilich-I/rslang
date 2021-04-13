import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './SavanaLife.scss';

interface iProps {
    lifes: number;
}
export const SavanaLife: React.FC<iProps> = ({ lifes }: iProps) => {
    const fullLife = new Array(lifes).fill('');

    return (
        <div className='game-savana-life'>
            {fullLife.map((el, idx) => (
                <div className='game-savana-life-el' key={idx}>
                    <FavoriteIcon />
                </div>
            ))}
        </div>
    );
};
