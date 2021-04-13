import { conditions, prepareWord } from './helpers';

it('should return something', () => {
    expect(prepareWord()).toBeTruthy();
});

it('should return something', () => {
    const userWord = {
        id: 'id',
        difficulty: 'learning',
        wordId: 'id',
    };
    const word = {
        id: 'id111',
        group: 1,
        page: 1,
        word: '',
        image: '',
        audio: '',
        audioMeaning: '',
        audioExample: '',
        textMeaning: '',
        textExample: '',
        transcription: '',
        textExampleTranslate: '',
        textMeaningTranslate: '',
        wordTranslate: '',
    };
    expect(conditions(userWord, word, 'learning')).toBeFalsy();
});

test('loginUser gets called with the right thing', () => {
    const loginUser = jest.fn();
    loginUser({ email: 'user@mail.ru', password: 'asdfasdf' });
    expect(loginUser).toBeCalledWith(
        expect.objectContaining({
            email: expect.any(String),
            password: expect.any(String),
        }),
    );
});
