import React from 'react';
import { JsonSelectors } from '@/entities/User';
import ThemeProvider from '../ui/ThemeProvider';

const withTheme = (Component: React.ComponentType) => {
    return () => {
        const { useJsonSettings } = JsonSelectors.jsonSettings();
        const { theme: defaultTheme } = useJsonSettings();
        return (
            <ThemeProvider initialTheme={defaultTheme}>
                <Component />
            </ThemeProvider>
        );
    };
};

export default withTheme;
