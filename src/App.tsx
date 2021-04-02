import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Schoolbook } from './pages/SchoolBook/Schoolbook';
import { HomePage } from './pages/HomePage/HomePage';
import { Games } from './pages/Games/Games';
import { Stat } from './pages/Stat/Stat';
import { Dictionary } from './pages/Dictionary/Dictionary';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { SignUp } from './components/Header/Login/SignUp';
import { SignIn } from './components/Header/Login/SignIn';
import { SavanaGame } from './pages/Games/SavanaGame/SavanaGame';
import { AudioChallengeGame } from './pages/Games/AudioChallengeGame/AudioChallengeGame';
import { SprintGame } from './pages/Games/SprintGame/SprintGame';
import { MyOwnGame } from './pages/Games/MyOwnGame/MyOwnGame';
import './app.scss';
import { GamesResult } from './pages/Games/GamesResult/GamesResult';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Header />
            <main className='app-container'>
                <Switch>
                    <Route component={HomePage} path='/' exact />
                    <Route component={Schoolbook} path='/sb' />
                    <Route component={Dictionary} path='/dict' />
                    <Route component={Games} path='/games' />
                    <Route component={Stat} path='/stat' />
                    <Route component={SignUp} path='/sign-up' />
                    <Route component={SignIn} path='/sign-in' />
                    <Route component={SavanaGame} path='/savana' />
                    <Route component={AudioChallengeGame} path='/audio-challenge' />
                    <Route component={SprintGame} path='/sprint' />
                    <Route component={MyOwnGame} path='/my-own' />
                    <Route component={GamesResult} path='/result' />
                </Switch>
            </main>
            <Footer />
        </BrowserRouter>
    );
};

export default App;
