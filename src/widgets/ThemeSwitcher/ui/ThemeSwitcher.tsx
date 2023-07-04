import React, {JSX} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import {useTheme} from 'app/providers/ThemeProvider';
import SwitchIcon from 'shared/assets/icons/theme-icon.svg';
import ThemeButton from 'shared/ui/Button/consts/ThemeButton';
import Button from 'shared/ui/Button';


interface IThemeSwitcherProps {
    className?: string
}

const ThemeSwitcher: React.FC<IThemeSwitcherProps> = ({className}: IThemeSwitcherProps): JSX.Element => {
    const {toggleTheme} = useTheme();

    return (
        <Button theme={ThemeButton.CLEAR} onClick={toggleTheme} className={classNames(cls.ThemeSwitcher, {}, [className])}>
            <SwitchIcon className={cls.icon}/>
        </Button>

    );
};

export default ThemeSwitcher;
