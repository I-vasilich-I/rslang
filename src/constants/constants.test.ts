import { DEVELOPERS, DIFFICULTY, AMOUNT_OF_PAGES } from './constants';
import avatar from '../assets/img/avatar.svg';

it('DEVELOPERS length to be 4', () => {
    expect(DEVELOPERS).toHaveLength(4);
});

it('DEVELOPERS contain developer', () => {
    const developer = {
        name: 'Денис Короткевич',
        git: 'https://github.com/Lex-tp',
        bio: `Денис Короткевич`,
        picture: avatar,
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

it('max amount of pages should be less than 30', () => {
    expect(AMOUNT_OF_PAGES.MAX).toBeLessThan(30);
});

it('min amount of pages should be greater than or Equal 0', () => {
    expect(AMOUNT_OF_PAGES.MIN).toBeGreaterThanOrEqual(0);
});
