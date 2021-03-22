import React, { useState } from 'react';
import { User } from '../../helpers/interfaces';
import { createUser, loginUser } from '../../helpers/helpers';

const SignIn = (): JSX.Element => {
    const [values, setValues] = useState<User>({
        name: '',
        email: '',
        password: '',
    });
    const login = {
        signIn: false,
        signUp: false,
    };

    const handleChange = (prop: keyof User) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleBtnClick = async () => {
        try {
            if (!login.signUp) {
                const userInfo = await createUser(values);
                localStorage.setItem('user', JSON.stringify(userInfo));
                console.log('user created');
                login.signUp = !login.signUp;
            }
            if (!login.signIn) {
                const loginInfo = await loginUser(values);
                localStorage.setItem('login', JSON.stringify(loginInfo));
                console.log('user logged in');
                login.signIn = !login.signIn;
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <form className='signin'>
                <label>
                    Name:
                    <input type='text' value={values.name} onChange={handleChange('name')} />
                </label>
                <label>
                    e-mail:
                    <input type='email' value={values.email} onChange={handleChange('email')} required />
                </label>
                <label>
                    password:
                    <input
                        type='password'
                        value={values.password}
                        minLength={8}
                        onChange={handleChange('password')}
                        required
                    />
                </label>
            </form>
            <button onClick={handleBtnClick}>{login.signIn ? 'Sign in' : 'Sign up'}</button>
        </>
    );
};

export { SignIn };
