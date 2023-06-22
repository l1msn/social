import {useContext} from "react";
import IUseThemeResult from "app/providers/ThemeProvider/interfaces/hooks/IUseThemeResult";
import {LocalStorageThemeKey, ThemeContext} from "app/providers/ThemeProvider/lib/ThemeContext";
import Themes from "app/providers/ThemeProvider/consts/Themes";



function useTheme(): IUseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    function toggleTheme(): void {
        const newTheme: Themes = theme === Themes.DARK ? Themes.LIGHT : Themes.DARK;
        setTheme(newTheme);
        localStorage.setItem(LocalStorageThemeKey, newTheme);
    }

    return {theme, toggleTheme}
}

export default useTheme;
