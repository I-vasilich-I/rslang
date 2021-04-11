import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { useActions } from '../../hooks/useActions';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
        position: 'fixed',
        bottom: 10,
        left: 10,
    },
    alert__text: {
        fontSize: '3rem',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
}));

export default function ActionAlerts(): JSX.Element | null {
    const classes = useStyles();
    const { alert, shown } = useTypedSelector((state) => state.alerts);
    const { SetAlertShown } = useActions();

    return shown ? (
        <div className={classes.root}>
            <Alert
                severity={alert.type}
                onClose={() => {
                    SetAlertShown(false);
                }}
            >
                <AlertTitle>{alert.title}</AlertTitle>
                {alert.message}
            </Alert>
        </div>
    ) : null;
}
