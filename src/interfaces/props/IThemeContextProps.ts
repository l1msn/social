import React from "react";
import Themes from "../../consts/Themes";


interface IThemeContextProps {
    children?: React.ReactNode,
    theme?: Themes,
    setTheme?: (theme: Themes) => void;
}

export default IThemeContextProps;
