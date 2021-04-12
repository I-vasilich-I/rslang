import React from 'react';
import './Button.scss';

interface ButtonProps {
    content: string;
    correct: boolean;
    clickHandler: () => void;
}

export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
    const { content, correct, clickHandler } = props;
    return (
        <button
            className={`button-answer ${correct ? 'button-answer__correct' : 'button-answer__incorrect'}`}
            onClick={() => {
                clickHandler();
            }}
        >
            {content}
        </button>
    );
};
