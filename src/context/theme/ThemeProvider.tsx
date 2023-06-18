import React, {JSX, useMemo, useState} from 'react';
import { LocalStorageThemeKey, ThemeContext} from './ThemeContext';
import Themes from "../../consts/Themes";
import IThemeContextProps from "../../interfaces/props/IThemeContextProps";



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
