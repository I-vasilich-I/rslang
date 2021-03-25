import React, { useState } from 'react';
import { User } from '../../../types/interfaces';
import { createUser, loginUser } from '../../../helpers/helpers';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import './Login.scss';

const SignUp = (): JSX.Element => {
    const [values, setValues] = useState<User>({
        name: '',
        email: '',
        password: '',
        passwordAgain: '',
    });

    const history = useHistory();
    const handleChange = (prop: keyof User) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const passwordValidation = (
        <p className='password__validation'>
            {values.password === values.passwordAgain ? '   ' : 'Пароли должны быть идентичны'}
        </p>
    );

    const handleBtnClick = async () => {
        if (values.password === values.passwordAgain && values.name !== '' && values.email.match(/^\S+@\S+\.\S+$/))
            try {
                const userInfo = await createUser(values);
                if (!userInfo.error) {
                    localStorage.setItem('user', JSON.stringify(userInfo));
                    console.log('user created');
                    const loginInfo = await loginUser(values);
                    if (loginInfo.message === 'Authenticated') {
                        localStorage.setItem('login', JSON.stringify(loginInfo));
                        console.log('user logged in');
                        history.push('/');
                    } else history.push('/sign-in');
                } else console.log(`hasn't been validated`);
            } catch (error) {
                console.log(error);
            }
        else console.log(`hasn't been validated`);
    };

    return (
        <div className='registration'>
            <form action='#' className='form-body'>
                <h3>Регистрация</h3>
                <label htmlFor='name'>Введите имя</label>
                <input type='text' value={values.name} onChange={handleChange('name')} required />
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
                <label htmlFor='passwordAgain'>Повторите пароль</label>
                <input
                    type='password'
                    value={values.passwordAgain}
                    minLength={8}
                    onChange={handleChange('passwordAgain')}
                    required
                />
                {passwordValidation}
                <div className='sign-up__link'>
                    <p>Уже есть аккаунт?</p>
                    <Link to='/sign-in'>Войти</Link>
                </div>
                <div className='form_button'>
                    <input className='button' type='button' value='Sign up' onClick={handleBtnClick} />
                </div>
            </form>
        </div>
    );
};

export { SignUp };
