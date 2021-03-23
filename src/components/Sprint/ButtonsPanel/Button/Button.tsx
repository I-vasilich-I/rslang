import React from 'react';

import './Button.scss';

interface ButtonProps {
    content: string;
    correct: boolean;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const { content, correct } = props;
    return (
        <button className={`button-answer ${correct ? 'button-answer__correct' : 'button-answer__incorrect'}`}>
            {content}
        </button>
    );
};
