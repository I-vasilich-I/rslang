import { DEVELOPERS, DIFFICULTY, AMOUNT_OF_PAGES } from './constants';

it('DEVELOPERS length to be 4', () => {
    expect(DEVELOPERS).toHaveLength(4);
});

it('DEVELOPERS contain developer', () => {
    const developer = {
        name: 'Сергей Нестеров',
        git: 'https://github.com/nimlu-bot',
    };
    expect(DEVELOPERS).toContainEqual(developer);
});

it('DIFFICULTY contain field complicated', () => {
    expect(DIFFICULTY).toHaveProperty('complicated');
});

it('developer github is URL', () => {
    expect(DEVELOPERS[0].git).toMatch(
        /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi,
    );
});
it('GB youtube url have been present', () => {
    expect(AMOUNT_OF_PAGES.MAX).not.toBe(30);
});
