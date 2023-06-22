import React, {JSX, useMemo, useState} from 'react';
import Themes from "../consts/Themes";
import {LocalStorageThemeKey, ThemeContext} from "../lib/ThemeContext";
import IThemeContextProps from "app/providers/ThemeProvider/interfaces/props/IThemeContextProps";

const defaultTheme: Themes = localStorage.getItem(LocalStorageThemeKey) as Themes || Themes.LIGHT;

const ThemeProvider: React.FC<IThemeContextProps> = ({children}): JSX.Element => {
    const [theme, setTheme] = useState<Themes>(defaultTheme)

    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
