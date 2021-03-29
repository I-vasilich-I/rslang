import React from 'react';
import { useHistory } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
//import { Button } from '../common/Button';

interface Props {
    group: string;
}

export const SectionsButtons: React.FC<Props> = ({ group }: Props) => {
    const { setWordsGroup, setWordsPage } = useActions();
    const history = useHistory();
    const buttonsArray = new Array(6).fill('');

    const clickHandler = (idx: number) => {
        setWordsGroup(idx);
        setWordsPage(0);
        history.push(`/${group}/${idx + 1}`);
    };

    return (
        <div className='sections-btn-wrapper'>
            {buttonsArray.map((_, idx: number) => (
                <div className='sections-btn-wrapper-btn' key={idx} onClick={() => clickHandler(idx)}>
                    {idx + 1}
                </div>
                //<Button key={idx} text={(idx + 1).toString()} clickHandler={clickHandler} />
            ))}
        </div>
    );
};
