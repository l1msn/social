import React, { JSX, useEffect, useMemo, useState } from 'react';
import Themes from '@/shared/consts/theme';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/consts/localStorage';

interface IThemeProviderProps {
    children?: React.ReactNode;
    initialTheme?: Themes;
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Themes;

const ThemeProvider: React.FC<IThemeProviderProps> = (props): JSX.Element => {
    const { initialTheme, children } = props;

    const [theme, setTheme] = useState<Themes>(
        initialTheme || fallbackTheme || Themes.DARK,
    );
    const [isThemeInit, setIsThemeInit] = useState<boolean>(false);

    useEffect(() => {
        if (!isThemeInit && initialTheme) {
            setTheme(initialTheme);
            setIsThemeInit((prevState) => !prevState);
        }
    }, [isThemeInit, initialTheme]);

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme);
    }, [theme]);

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
