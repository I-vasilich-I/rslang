import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { DictionaryPage } from './DictionaryPage/DictionaryPage';
import { SideLinks } from '../../components/SideLinks/SideLinks';

import './Dictionary.scss';

export const Dictionary: React.FC = () => {
    return (
        <div className='dictionary-wrapper'>
            <SideLinks />
            <Switch>
                <Route path='/dict/:id'>
                    <DictionaryPage />
                </Route>
            </Switch>
        </div>
    );
};
