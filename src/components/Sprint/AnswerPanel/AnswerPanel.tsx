import React from 'react';

import './AnswerPanel.scss';
import { AnswerItem } from './AnswerItem/AnswerItem';

interface AnswersProps {
    answers: Array<boolean | undefined>;
}

export const AnswerPanel: React.FC<AnswersProps> = (props: AnswersProps) => {
    const { answers } = props;
    const answersState = [undefined, undefined, undefined];

    return (
        <div className='answer-panel-wrapper'>
            {answersState.map((answer, index) => {
                return <AnswerItem key={index} statusAnswer={answers[index]} />;
            })}
        </div>
    );
};
