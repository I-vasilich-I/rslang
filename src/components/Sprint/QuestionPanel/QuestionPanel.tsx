import React from 'react';
import './QuestionPanel.scss';

interface QuestionPanelProps {
    word: string;
    translate: string;
}

export const QuestionPanel: React.FC<QuestionPanelProps> = (props: QuestionPanelProps) => {
    const { word, translate } = props;

    return (
        <div className='question-panel'>
            <span className='question-panel__word'>{word}</span>
            <span className='question-panel__translate'>{translate}</span>
        </div>
    );
};
