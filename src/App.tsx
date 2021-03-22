import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Schoolbook } from './pages/SchoolBook/Schoolbook';
import { HomePage } from './pages/HomePage/HomePage';
import { Games } from './pages/Games/Games';
import { Stat } from './pages/Stat/Stat';
import { Dictionary } from './pages/Dictionary/Dictioanry';
import { settings } from './pages/Settings/Settings';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { SignIn } from './components/SignIn/Singin';

import './app.scss';

const App: React.FC = () => {
    return (
        <div className='app-container'>
            <BrowserRouter>
                <Header />
                <SignIn />
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
