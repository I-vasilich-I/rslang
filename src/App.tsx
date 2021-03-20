import React from 'react';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Schoolbook } from './pages/Schoolbook';
import { HomePage } from './pages/HomePage';
import { Games } from './pages/Games';
import { Stat } from './pages/Stat';
import { Dictionary } from './pages/Dictioanry';
import { settings } from './pages/Settings';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <div className='app-container'></div>
            <Switch>
                <Route component={HomePage} path='/' exact />
                <Route component={Schoolbook} path='/sb' />
                <Route path='/dict'>
                    <Dictionary />
                </Route>
                <Route component={Games} path='/games' />
                <Route component={Stat} path='/stat' />
                <Route component={settings} path='/settings' />
            </Switch>
        </BrowserRouter>
    );
};

export default App;
