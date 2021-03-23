import React, { useState } from 'react';
import { User } from '../../helpers/interfaces';
import { createUser, loginUser } from '../../helpers/helpers';

const SignIn = (): JSX.Element => {
    const [values, setValues] = useState<User>({
        name: '',
        email: '',
        password: '',
        registered: false, // nead to lift the state up
        loggedIn: false, // nead to lift the state up
    });

    const handleChange = (prop: keyof User) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleBtnClick = async () => {
        try {
            if (!values.registered) {
                const userInfo = await createUser(values);
                localStorage.setItem('user', JSON.stringify(userInfo));
                console.log('user created');
                setValues({ ...values, registered: true });
            }
            if (!values.loggedIn) {
                const loginInfo = await loginUser(values);
                localStorage.setItem('login', JSON.stringify(loginInfo));
                console.log('user logged in');
                setValues({ ...values, loggedIn: true });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='registration'>
            <form action='#' className='form-body'>
                <h3>Регистрация</h3>
                <input type='text' placeholder='Enter your name' value={values.name} onChange={handleChange('name')} />
                <input
                    type='email'
                    placeholder='Enter your email'
                    value={values.email}
                    onChange={handleChange('email')}
                    required
                />
                <input
                    type='password'
                    placeholder='Enter your password'
                    value={values.password}
                    minLength={8}
                    onChange={handleChange('password')}
                    required
                />
                <div className='form_button'>
                    <input
                        className='button'
                        type='button'
                        value={!values.registered ? 'Sign in' : 'Sign up'}
                        onClick={handleBtnClick}
                    />
                </div>
            </form>
            {/* <button onClick={handleBtnClick}>{login.signIn ? 'Sign in' : 'Sign up'}</button> */}
        </div>
    );
};

export { SignIn };
