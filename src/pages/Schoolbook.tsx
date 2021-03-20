import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SchoolbookPage } from './SchoolbookPage';
import { SideLinks } from '../components/SideLinks';

import './SchoolBook.scss';

export const Schoolbook: React.FC = () => {
    return (
        <div className='schoolbook-wrapper'>
            <SideLinks />

            <Switch>
                <Route path='/sb/:id'>
                    <SchoolbookPage />
                </Route>
            </Switch>
        </div>
    );
};
