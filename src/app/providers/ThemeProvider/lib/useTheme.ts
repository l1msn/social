import {useContext} from 'react';
import {LocalStorageThemeKey, ThemeContext} from 'app/providers/ThemeProvider/lib/ThemeContext';
import Themes from 'app/providers/ThemeProvider/consts/Themes';

interface IUseThemeResult {
    toggleTheme: () => void;
    theme: Themes
}

function useTheme(): IUseThemeResult {
    const {theme = Themes.LIGHT, setTheme} = useContext(ThemeContext);

    function toggleTheme(): void {
        let newTheme: Themes;
        switch (theme) {
        case Themes.DARK:
            newTheme = Themes.LIGHT;
            break;
        case Themes.LIGHT:
            newTheme = Themes.BREEZE;
            break;
        case Themes.BREEZE:
            newTheme = Themes.DARK;
            break;
        default:
            newTheme = Themes.LIGHT;
        }
        setTheme?.(newTheme);
        localStorage.setItem(LocalStorageThemeKey, newTheme);
    }

    return {theme, toggleTheme};
}

export default useTheme;
