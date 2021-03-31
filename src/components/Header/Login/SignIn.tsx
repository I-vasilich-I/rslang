import React, { useState } from 'react';
import { User } from '../../../types/interfaces';
import { loginUser } from '../../../helpers/helpers';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useActions } from '../../../hooks/useActions';
import { ALERTS } from '../../../constants/constants';
import { AlertType } from '../../../types/interfaces';
import './Login.scss';

const SignIn = (): JSX.Element => {
    const [values, setValues] = useState<User>({
        email: '',
        password: '',
    });
    const { setUser, SetAlert, SetAlertShown } = useActions();
    const history = useHistory();
    const handleChange = (prop: keyof User) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const showAlert = (alertType: AlertType['name'], timeOut = false): void => {
        SetAlert(alertType);
        SetAlertShown(true);
        if (timeOut) {
            setTimeout(() => {
                SetAlertShown(false);
            }, 1500);
        }
    };

    const handleBtnClick = async () => {
        if (values.password && values.email.match(/^\S+@\S+\.\S+$/))
            try {
                const loginInfo = await loginUser(values);
                if (loginInfo.message === 'Authenticated') {
                    setUser(loginInfo);
                    showAlert(ALERTS.userAuth, true);
                    history.push('/');
                } else showAlert({ ...ALERTS.userDenied, message: `Не авторизован ${loginInfo.message}` });
            } catch (error) {
                showAlert({ ...ALERTS.userDenied, message: error.message });
            }
        else showAlert({ ...ALERTS.userDenied, message: `Проверьте введенные данные` });
    };

    return (
        <div className='registration'>
            <form action='#' className='form-body'>
                <h3>Войти</h3>
                <label htmlFor='email'>Email</label>
                <input type='email' value={values.email} onChange={handleChange('email')} required />
                <label htmlFor='password'>Пароль</label>
                <input
                    type='password'
                    value={values.password}
                    minLength={8}
                    placeholder='Не менее 8 символов'
                    onChange={handleChange('password')}
                    required
                />
                <div className='sign-up__link'>
                    <p>Нет аккаунта?</p>
                    <Link to='/sign-up'>Регистрация</Link>
                </div>
                <div className='form_button'>
                    <input className='button' type='button' value='Войти' onClick={handleBtnClick} />
                </div>
            </form>
        </div>
    );
};

export { SignIn };
