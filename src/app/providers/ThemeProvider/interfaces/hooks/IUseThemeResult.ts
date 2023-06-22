import Themes from "app/providers/ThemeProvider/consts/Themes";

interface IUseThemeResult {
    toggleTheme: () => void;
    theme: Themes
}

export default IUseThemeResult;
