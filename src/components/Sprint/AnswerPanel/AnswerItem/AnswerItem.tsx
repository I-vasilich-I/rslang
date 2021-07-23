import React from 'react';
import CorrectIcon from '@material-ui/icons/Check';
import IncorrectIcon from '@material-ui/icons/Close';
import './AnswerItem.scss';

interface AnswerItemProps {
    statusAnswer?: boolean;
}

export const AnswerItem: React.FC<AnswerItemProps> = (props: AnswerItemProps) => {
    const { statusAnswer } = props;

    if (statusAnswer !== undefined) {
        return statusAnswer ? (
            <div className='answer-item answer-item__correct'>
                <CorrectIcon />
            </div>
        ) : (
            <div className='answer-item answer-item__incorrect'>
                <IncorrectIcon />
            </div>
        );
    }
    return <div className='answer-item' />;
};
