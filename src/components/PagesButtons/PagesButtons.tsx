import React from 'react';
import { useActions } from '../../hooks/useActions';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import IconButton from '@material-ui/core/IconButton';
import { useTheme } from '@material-ui/core/styles';
import './PageButtons.scss';

interface Props {
    page: number;
}

export const PagesButtons: React.FC<Props> = ({ page }: Props) => {
    const { incWordsPage, decWordsPage } = useActions();
    const theme = useTheme();

    const decreaseHandler = () => {
        decWordsPage(page);
    };

    const increaseHandler = () => {
        incWordsPage(page);
    };

    return (
        <>
            <div className='pages-btn-wrapper'>
                <IconButton aria-label='previous' onClick={decreaseHandler}>
                    {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                </IconButton>
                <span className='pages-btn-current'>Страница {page + 1}</span>
                <IconButton aria-label='next' onClick={increaseHandler}>
                    {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                </IconButton>
            </div>
        </>
    );
};
