import React, { JSX, memo, useCallback } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import SwitchIcon from '@/shared/assets/icons/theme-icon.svg';
import ThemeButton from '@/shared/ui/Button/consts/ThemeButton';
import Button from '@/shared/ui/Button';
import useTheme from '@/shared/lib/hooks/useTheme/useTheme';
import Themes from '@/shared/consts/theme';
import { saveJsonSettings } from '@/entities/User';
import useAppDispatch from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface IThemeSwitcherProps {
    className?: string;
}

const ThemeSwitcher: React.FC<IThemeSwitcherProps> = memo(
    ({ className }: IThemeSwitcherProps): JSX.Element => {
        const { toggleTheme } = useTheme();

        const dispatch = useAppDispatch();

        const onToggleHandler = useCallback(() => {
            toggleTheme((newTheme: Themes) => {
                dispatch(saveJsonSettings({ theme: newTheme }));
            });
        }, [dispatch, toggleTheme]);

        return (
            <Button
                theme={ThemeButton.CLEAR}
                onClick={onToggleHandler}
                className={classNames(cls.ThemeSwitcher, {}, [className])}
            >
                <SwitchIcon className={cls.icon} />
            </Button>
        );
    },
);

export default ThemeSwitcher;
