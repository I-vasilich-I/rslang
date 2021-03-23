import React from 'react';

import './AnswerPanel.scss';
import { AnswerItem } from './AnswerItem/AnswerItem';

export const AnswerPanel: React.FC = () => {
    return (
        <div className='answer-panel-wrapper'>
            <AnswerItem statusAnswer={true} />
            <AnswerItem />
            <AnswerItem />
        </div>
    );
};
