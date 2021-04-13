import { DEVELOPERS, DIFFICULTY, AMOUNT_OF_PAGES } from './constants';
import nimlu from '../assets/img/nimlu.jpg';

it('DEVELOPERS length to be 4', () => {
    expect(DEVELOPERS).toHaveLength(4);
});

it('DEVELOPERS contain developer', () => {
    const developer = {
        name: 'Сергей Нестеров',
        git: 'https://github.com/nimlu-bot',
        bio: `Сергей Нестеров. Системный администратор в гос. конторе. Как известно, системный администратор —
        это личинка программиста. В работе приходилось использовать маленькие самописные скрипты.
        Однажды пришло понимание, что личинка должна стать чем-то большим. Просторы интернета подсказали
        путь в RS School. Так как кое-какой бекграунд уже был, сначала обучение показалось очень легким,
        но тут начался React — и время резко закончилось. К концу React я понял, что даже самые сложные
        по началу задания на самом деле вполне выполнимы и с небольшими подсказками ментора на конечном
        этапе выглядят даже легкими. Основное, чему я научился в RS School — это то, что все, даже самые
        сложные, задачи можно решить, главное не сдаваться на полпути.`,
        picture: nimlu,
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
