import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Loader.scss';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& > * + *': {
                marginLeft: theme.spacing(2),
            },
        },
    }),
);

export default function CircularIndeterminate() {
    const classes = useStyles();

    return (
        <div className='loader__container'>
            <div className={classes.root}>
                <CircularProgress color='inherit' />
            </div>
        </div>
    );
}
