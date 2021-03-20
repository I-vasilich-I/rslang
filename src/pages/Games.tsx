import React from 'react';
import { GamesNavbar } from '../components/GamesNavbar/GamesNavbar';
import { SavanaGame } from './SavanaGame';
import { MyOwnGame } from './MyOwnGame';
import { SprintGame } from './SprintGame';
import { AudioChallengeGame } from './AudioChallengeGame';
import { Switch, Route } from 'react-router-dom';

export const Games: React.FC = () => {
    return (
        <div className='games-wrapper'>
            <h1>Games</h1>
            <GamesNavbar />
            <Switch>
                <Route component={SavanaGame} path='/games/savana' />
                <Route component={AudioChallengeGame} path='/games/audio-challenge' />
                <Route component={SprintGame} path='/games/sprint' />
                <Route component={MyOwnGame} path='/games/my-own' />
            </Switch>
        </div>
    );
};
