import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import { useHistory } from 'react-router';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useTypedSelector } from '../../../hooks/useTypeSelector';
import { useActions } from '../../../hooks/useActions';
import './Login.scss';

const Login = (): JSX.Element => {
    const { avatar, message, name } = useTypedSelector((state) => state.user);
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
        setUser({ message: 'log out', name: '', userId: '', token: '', refreshToken: '', avatar: '' });
    };

    return (
        <div className='login'>
            <div onClick={handleClick} aria-controls='avatar' aria-haspopup='true'>
                {avatar && message === 'Authenticated' ? (
                    <img src={avatar} alt='avatar' className='login' />
                ) : (
                    <PersonIcon fontSize='large' />
                )}
            </div>
            <Menu id='avatar' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <MenuItem button={false} className='login__name'>
                    {name || 'Гость'}
                </MenuItem>
                {message === 'Authenticated' ? (
                    <MenuItem onClick={handleLogout}>Выйти</MenuItem>
                ) : (
                    <MenuItem onClick={handleLogin}>Войти</MenuItem>
                )}
            </Menu>
        </div>
    );
};

export { Login };
