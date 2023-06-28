import {fireEvent, render, screen} from '@testing-library/react';
import Sidebar from './Sidebar';
import renderWithTranslation from 'shared/lib/tests/renderWithTranslation';

describe('Sidebar component test', (): void => {
    test('', (): void => {
        renderWithTranslation(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('', (): void => {
        renderWithTranslation(<Sidebar />);
        const toggleBtn: HTMLElement = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
