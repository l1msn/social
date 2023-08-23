import classNames from './classNames';

describe('className function testing', (): void => {
    test('with only first param', (): void => {
        expect(classNames('someClass')).toBe('someClass ');
    });

    test('with additional class', (): void => {
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(
            'someClass class1 class2 ',
        );
    });

    test('with mods(all true)', (): void => {
        expect(
            classNames('someClass', { hovered: true, scrollable: true }, [
                'class1',
            ]),
        ).toBe('someClass class1 hovered,scrollable');
    });

    test('with mods(one true, other false)', (): void => {
        expect(
            classNames('someClass', { hovered: true, scrollable: false }, [
                'class1',
            ]),
        ).toBe('someClass class1 hovered');
    });
    test('with mods(one true, other undefined)', (): void => {
        expect(
            classNames('someClass', { hovered: true, scrollable: undefined }, [
                'class1',
            ]),
        ).toBe('someClass class1 hovered');
    });
});
