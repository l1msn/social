import React, {JSX, useMemo, useState} from 'react';
import Themes from '../consts/Themes';
import {LocalStorageThemeKey, ThemeContext} from '../lib/ThemeContext';

interface IThemeContextProps {
    children?: React.ReactNode,
    theme?: Themes,
    setTheme?: (theme: Themes) => void;
}

interface IThemeProviderProps {
    children?: React.ReactNode
    initialTheme?: Themes;
}

const defaultTheme: Themes = localStorage.getItem(LocalStorageThemeKey) as Themes || Themes.LIGHT;

const ThemeProvider: React.FC<IThemeProviderProps> = (props): JSX.Element => {
    const {initialTheme, children} = props;

    const [theme, setTheme] = useState<Themes>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
