import React, { JSX, memo, useCallback } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import SwitchIconDeprecated from '@/shared/assets/icons/deprecated/theme-icon.svg';
import SwitchIcon from '@/shared/assets/icons/redesigned/theme.svg';
import ThemeButton from '@/shared/ui/deprecated/Button/consts/ThemeButton';
import { default as ButtonDeprecated } from '@/shared/ui/deprecated/Button';
import useTheme from '@/shared/lib/hooks/useTheme/useTheme';
import Themes from '@/shared/consts/theme';
import { saveJsonSettings } from '@/entities/User';
import useAppDispatch from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { ToggleFeatures } from '@/shared/features';
import { default as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import Icon from '@/shared/ui/redesigned/Icon';

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

        const DeprecatedThemeSwitcher = (
            <ButtonDeprecated
                theme={ThemeButton.CLEAR}
                onClick={onToggleHandler}
                className={classNames(cls.ThemeSwitcher, {}, [className])}
            >
                <IconDeprecated
                    Svg={SwitchIconDeprecated}
                    className={cls.icon}
                />
            </ButtonDeprecated>
        );

        const RedesignedThemeSwitcher = (
            <Icon
                Svg={SwitchIcon}
                className={cls.icon}
                onClick={onToggleHandler}
                clickable
            />
        );

        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={RedesignedThemeSwitcher}
                off={DeprecatedThemeSwitcher}
            />
        );
    },
);

export default ThemeSwitcher;
