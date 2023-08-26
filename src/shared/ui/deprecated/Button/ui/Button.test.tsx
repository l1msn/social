import Button from './Button';
import { render, screen } from '@testing-library/react';
import ThemeButton from '../consts/ThemeButton';

describe('Button component test', (): void => {
    test('Render and found on page', (): void => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Render and found class ThemeButton.CLEAR', (): void => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
