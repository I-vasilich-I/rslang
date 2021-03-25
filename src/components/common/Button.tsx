import React from 'react';

// interface iProps {
//     text: string;
//     clickHandler: (_: number) => void;
// }
// export const Button: React.FC<iProps> = ({ text, clickHandler }: iProps) => {
//     const idx = parseInt(text) - 1;
//     return (
//         <button className='button' onClick={() => clickHandler(idx)}>
//             {text}
//         </button>
//     );
// };
export const Button: React.FC = () => {
    return <button className='button'></button>;
};
