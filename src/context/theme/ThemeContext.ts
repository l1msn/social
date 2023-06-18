import {createContext} from "react";
import IThemeContextProps from "../../interfaces/props/IThemeContextProps";


const LocalStorageThemeKey = 'theme';

const ThemeContext = createContext<IThemeContextProps>({} as IThemeContextProps)

export { ThemeContext, LocalStorageThemeKey }
