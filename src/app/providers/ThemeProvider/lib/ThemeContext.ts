import React, {createContext} from 'react';
import Themes from '@/app/providers/ThemeProvider/consts/Themes';

interface IThemeContextProps {
    children?: React.ReactNode,
    theme?: Themes,
    setTheme?: (theme: Themes) => void;
}

const LocalStorageThemeKey = 'theme';

const ThemeContext = createContext<IThemeContextProps>({} as IThemeContextProps);

export {ThemeContext, LocalStorageThemeKey};
