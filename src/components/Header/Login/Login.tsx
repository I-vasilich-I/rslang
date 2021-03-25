import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import { useHistory } from 'react-router';
import './Login.scss';

const Login = (): JSX.Element => {
    const history = useHistory();
    const handleClick = () => {
        if (history.location.pathname !== '/sign-in') history.push('/sign-in');
    };

    return (
        <div className='login' onClick={handleClick}>
            <PersonIcon fontSize='large' />
        </div>
    );
};

export { Login };
