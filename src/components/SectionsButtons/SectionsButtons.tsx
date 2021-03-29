import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useTypedSelector } from '../../hooks/useTypeSelector';
//import { Button } from '../common/Button';

interface Props {
    group: string;
}

export const SectionsButtons: React.FC<Props> = ({ group }: Props) => {
    const { group: groupNum } = useTypedSelector((state) => state.wordCard);
    const { setWordsGroup, setWordsPage } = useActions();
    const history = useHistory();

    const clickHandler = (idx: number) => {
        setWordsGroup(idx);
        setWordsPage(0);
        history.push(`/${group}/${idx + 1}`);
    };

    const handleChange = (event: React.ChangeEvent<Record<string, never>>, newValue: number) => {
        clickHandler(newValue);
    };

    return (
        <Paper square>
            <Tabs
                value={groupNum}
                indicatorColor='primary'
                textColor='primary'
                onChange={handleChange}
                aria-label='Группы'
                centered
            >
                <Tab label='1' />
                <Tab label='2' />
                <Tab label='3' />
                <Tab label='4' />
                <Tab label='5' />
                <Tab label='6' />
            </Tabs>
        </Paper>
    );
};
