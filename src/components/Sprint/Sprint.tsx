import React from 'react';

import './Sprint.scss';
import { ControlPanel } from './ControlPanel/ControlPanel';
import { AnswerPanel } from './AnswerPanel/AnswerPanel';
import { ComboPanel } from './ComboPanel/ComboPanel';
import { QuestionPanel } from './QuestionPanel/QuestionPanel';
import { ButtonsPanel } from './ButtonsPanel/ButtonsPanel';

export const Sprint: React.FC = () => {
    return (
        <div className='sprint-game'>
            <ControlPanel />
            <AnswerPanel />
            <ComboPanel gainPoint={2} />
            <QuestionPanel word={'Table'} translate={'Стол'} />
            <ButtonsPanel />
        </div>
    );
};
