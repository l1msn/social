import {createContext} from "react";
import IThemeContextProps from "app/providers/ThemeProvider/interfaces/props/IThemeContextProps";



const LocalStorageThemeKey = 'theme';

const ThemeContext = createContext<IThemeContextProps>({} as IThemeContextProps)

export { ThemeContext, LocalStorageThemeKey }
