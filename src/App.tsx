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

import './app.scss';
import { SavanaGame } from './pages/Games/SavanaGame/SavanaGame';
import { AudioChallengeGame } from './pages/Games/AudioChallengeGame/AudioChallengeGame';
import { SprintGame } from './pages/Games/SprintGame/SprintGame';
import { MyOwnGame } from './pages/Games/MyOwnGame/MyOwnGame';

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
                    <Route component={SavanaGame} path='/savana' />
                    <Route component={AudioChallengeGame} path='/audio-challenge' />
                    <Route component={SprintGame} path='/sprint' />
                    <Route component={MyOwnGame} path='/my-own' />
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

export default App;
