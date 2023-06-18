import {useContext} from "react";
import {LocalStorageThemeKey, ThemeContext} from "../context/theme/ThemeContext";
import Themes from "../consts/Themes";
import IUseThemeResult from "../interfaces/hooks/IUseThemeResult";


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
