import React from 'react';
import { useHistory } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';

interface Props {
    groupPath: string;
}

export const SectionsButtons: React.FC<Props> = ({ groupPath }: Props) => {
    const { setWordsGroup, setWordsPage } = useActions();
    const history = useHistory();
    const buttonsArray = new Array(6).fill('');

    const clickHandler = (idx: number) => {
        setWordsGroup(idx);
        setWordsPage(0);
        history.push(`/${groupPath}/${idx + 1}`);
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
