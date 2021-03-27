import React, { useState } from 'react';
import { User } from '../../../types/interfaces';
import { loginUser } from '../../../helpers/helpers';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useActions } from '../../../hooks/useActions';
import './Login.scss';

const SignIn = (): JSX.Element => {
    const [values, setValues] = useState<User>({
        email: '',
        password: '',
    });
    const { setUser } = useActions();
    const history = useHistory();
    const handleChange = (prop: keyof User) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleBtnClick = async () => {
        if (values.password && values.email.match(/^\S+@\S+\.\S+$/))
            try {
                const loginInfo = await loginUser(values);
                if (loginInfo.message === 'Authenticated') {
                    localStorage.setItem('login', JSON.stringify(loginInfo));
                    setUser(loginInfo);
                    history.push('/');
                }
            } catch (error) {
                console.log(error);
            }
        else console.log(`hasn't been validated`);
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
