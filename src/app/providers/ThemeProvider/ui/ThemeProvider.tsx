import React, { JSX, useEffect, useMemo, useState } from 'react';
import Themes from '@/shared/consts/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';

interface IThemeProviderProps {
    children?: React.ReactNode;
    initialTheme?: Themes;
}

const ThemeProvider: React.FC<IThemeProviderProps> = (props): JSX.Element => {
    const { initialTheme, children } = props;

    const [theme, setTheme] = useState<Themes>(initialTheme || Themes.DARK);
    const [isThemeInit, setIsThemeInit] = useState<boolean>(false);

    useEffect(() => {
        if (!isThemeInit && initialTheme) {
            setTheme(initialTheme);
            setIsThemeInit((prevState) => !prevState);
        }
    }, [isThemeInit, initialTheme]);

    const defaultProps = useMemo(
        () => ({
            theme: theme,
            setTheme: setTheme,
        }),
        [theme],
    );

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
