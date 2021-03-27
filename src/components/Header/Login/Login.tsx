import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import { useHistory } from 'react-router';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useTypedSelector } from '../../../hooks/useTypeSelector';
import { useActions } from '../../../hooks/useActions';
import './Login.scss';

const Login = (): JSX.Element => {
    const { avatar, user } = useTypedSelector((state) => state.user);
    const { setUser } = useActions();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const history = useHistory();
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogin = () => {
        setAnchorEl(null);
        if (history.location.pathname !== '/sign-in') history.push('/sign-in');
    };
    const handleLogout = () => {
        setAnchorEl(null);
        localStorage.removeItem('user');
        localStorage.removeItem('login');
    };

    return (
        <div className='login'>
            <div onClick={handleClick} aria-controls='avatar' aria-haspopup='true'>
                {avatar && user && user.message === 'Authenticated' ? (
                    <img src={avatar} alt='avatar' className='login' />
                ) : (
                    <PersonIcon fontSize='large' />
                )}
            </div>
            <Menu id='avatar' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem onClick={handleLogin}>Log in</MenuItem>
                <MenuItem onClick={handleLogout}>Log out</MenuItem>
            </Menu>
        </div>
    );
};

export { Login };
