import {useContext} from "react";
import {LocalStorageThemeKey, ThemeContext} from "app/providers/ThemeProvider/lib/ThemeContext";
import Themes from "app/providers/ThemeProvider/consts/Themes";

interface IUseThemeResult {
    toggleTheme: () => void;
    theme: Themes
}

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
