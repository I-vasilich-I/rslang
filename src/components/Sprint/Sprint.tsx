import React from 'react';

import './Sprint.scss';
import { ControlPanel } from './ControlPanel/ControlPanel';

export const Sprint: React.FC = () => {
    return (
        <div className='sprint-game'>
            <ControlPanel />
        </div>
    );
};
