import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import Themes from '../../../consts/theme';
import { LocalStorageThemeKey } from '../../../consts/localStorage';

interface IUseThemeResult {
    toggleTheme: () => void;
    theme: Themes;
}

function useTheme(): IUseThemeResult {
    const { theme = Themes.LIGHT, setTheme } = useContext(ThemeContext);

    function toggleTheme(): void {
        const newTheme: Themes =
            theme === Themes.DARK ? Themes.LIGHT : Themes.DARK;
        setTheme?.(newTheme);
        localStorage.setItem(LocalStorageThemeKey, newTheme);
    }

    return { theme, toggleTheme };
}

export default useTheme;
