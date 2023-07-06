import {fireEvent, screen} from '@testing-library/react';
import Counter from './Counter';
import componentRender from 'shared/lib/tests/componentRender/componentRender';
import {userEvent} from '@storybook/testing-library';

describe('Counter component test', (): void => {
    test('have value in document', (): void => {
        componentRender(<Counter />, {
            initialState: {counter: {value: 1}},
        });
        expect(screen.getByTestId('value-title')).toHaveTextContent('1');
    });

    test('inc by button', (): void => {
        componentRender(<Counter />, {
            initialState: {counter: {value: 1}},
        });
        userEvent.click(screen.getByTestId('inc-button'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('2');
    });

    test('dec by button', (): void => {
        componentRender(<Counter />, {
            initialState: {counter: {value: 1}},
        });
        userEvent.click(screen.getByTestId('dec-button'));
        expect(screen.getByTestId('value-title')).toHaveTextContent('0');
    });
});
