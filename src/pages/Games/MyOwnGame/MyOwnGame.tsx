import React, { useEffect } from 'react';
//import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../../hooks/useTypeSelector';
//import { fetchWords, SetWordPage } from '../../../store/action-creators/wordCard';
import { useActions } from '../../../hooks/useActions';

export const MyOwnGame: React.FC = () => {
    // const { error, group, loading, page, words } = useTypedSelector((state) => state.wordCard);
    // //const dispatch = useDispatch();
    // const { fetchWords, setWordsPage, setWordsGroup } = useActions();

    // useEffect(() => {
    //     fetchWords(page, group);
    //     return () => {
    //         console.log('clean');
    //     };
    // }, [page, group]);

    // if (loading) {
    //     return <h1>Loading</h1>;
    // }
    // if (error) {
    //     return <h1>{error}</h1>;
    // }
    // console.log(words);
    // const clickHandler = () => {
    //     setWordsPage(2);
    //     setWordsGroup(2);
    // };
    return (
        <div className='game-my-wrapper'>
            {/* <h1>My game</h1>
            {words.map((word) => {
                return <div key={word.id}>{word.word}</div>;
                //console.log(word);
            })}
            <button onClick={() => clickHandler()}>+1</button> */}
        </div>
    );
};
