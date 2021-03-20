import React from 'react';
import { useHistory, Switch, Route } from 'react-router-dom';
import { SchoolbookPage } from './SchoolbookPage';

export const Schoolbook: React.FC = () => {
    const history = useHistory();
    return (
        <div className='schoolbook-wrapper'>
            <h1>schoolbook</h1>
            <Switch>
                <Route path='/sb/:id'>
                    <SchoolbookPage />
                </Route>
            </Switch>
            <button className='schoolbook-page-btn' onClick={() => history.push('/sb/1')}>
                1
            </button>
            <button className='schoolbook-page-btn' onClick={() => history.push('/sb/2')}>
                2
            </button>
            <button className='schoolbook-page-btn' onClick={() => history.push('/sb/3')}>
                3
            </button>
            <button className='schoolbook-page-btn' onClick={() => history.push('/sb/4')}>
                4
            </button>
            <button className='schoolbook-page-btn' onClick={() => history.push('/sb/5')}>
                5
            </button>
            <button className='schoolbook-page-btn' onClick={() => history.push('/sb/6')}>
                6
            </button>
            <button className='schoolbook-page-btn' onClick={() => history.push('/dict/learning')}>
                Dictionary
            </button>
        </div>
    );
};
