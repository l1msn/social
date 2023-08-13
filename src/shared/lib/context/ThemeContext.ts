import Themes from '../../consts/theme';
import React, {createContext} from 'react';

interface IThemeContextProps {
    children?: React.ReactNode,
    theme?: Themes,
    setTheme?: (theme: Themes) => void;
}

const ThemeContext = createContext<IThemeContextProps>({} as IThemeContextProps);

export {ThemeContext};
