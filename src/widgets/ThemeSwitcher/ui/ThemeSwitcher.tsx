import React, {JSX} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import {Themes, useTheme} from 'app/providers/ThemeProvider';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import ThemeButton from 'shared/ui/Button/consts/ThemeButton';
import Button from 'shared/ui/Button';


interface IThemeSwitcherProps {
    className?: string
}

const ThemeSwitcher: React.FC<IThemeSwitcherProps> = ({className}: IThemeSwitcherProps): JSX.Element => {
    const {theme, toggleTheme} = useTheme();

    return (
        <Button theme={ThemeButton.CLEAR} onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, {}, [className])}>
            {theme == Themes.DARK ? <DarkIcon/> : <LightIcon/>}
        </Button>

    );
};

export default ThemeSwitcher;
