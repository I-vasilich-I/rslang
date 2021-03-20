import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Schoolbook } from './pages/Schoolbook';
import { HomePage } from './pages/HomePage';
import { Games } from './pages/Games';
import { Stat } from './pages/Stat';
import { Dictionary } from './pages/Dictioanry';
import { settings } from './pages/Settings';
import { Header } from './components/Header';
import { Footer } from './components/Footer';

import './app.scss';

const App: React.FC = () => {
    return (
        <div className='app-container'>
            <BrowserRouter>
                <Header />

                <Switch>
                    <Route component={HomePage} path='/' exact />
                    <Route component={Schoolbook} path='/sb' />
                    <Route component={Dictionary} path='/dict' />
                    <Route component={Games} path='/games' />
                    <Route component={Stat} path='/stat' />
                    <Route component={settings} path='/settings' />
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
