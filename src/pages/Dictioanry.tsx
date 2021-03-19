import React from 'react';
import { useHistory, Switch, Route } from 'react-router-dom';
import { DictionaryPage } from './DictionaryPage';

export const Dictionary: React.FC = () => {
    const history = useHistory();
    return (
        <div className='dictionary-wrapper'>
            <h1>Dictioanry</h1>
            <Switch>
                <Route path='/dict/:id'>
                    <DictionaryPage />
                </Route>
            </Switch>
            <button className='dictionary-page-btn' onClick={() => history.push('/dict/learning')}>
                1
            </button>
            <button className='dictionary-page-btn' onClick={() => history.push('/dict/compound')}>
                2
            </button>
            <button className='dictionary-page-btn' onClick={() => history.push('/dict/deleted')}>
                3
            </button>
        </div>
    );
};
