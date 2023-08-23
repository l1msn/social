import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import Themes from '../../../consts/theme';

interface IUseThemeResult {
    toggleTheme: (saveAction?: (theme: Themes) => void) => void;
    theme: Themes;
}

function useTheme(): IUseThemeResult {
    const { theme = Themes.LIGHT, setTheme } = useContext(ThemeContext);

    function toggleTheme(saveAction?: (theme: Themes) => void): void {
        const newTheme: Themes =
            theme === Themes.DARK ? Themes.LIGHT : Themes.DARK;
        setTheme?.(newTheme);
        saveAction?.(newTheme);
    }

    return { theme, toggleTheme };
}

export default useTheme;
