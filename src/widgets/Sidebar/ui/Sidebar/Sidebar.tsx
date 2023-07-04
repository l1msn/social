import React, {JSX, useState} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import Button from 'shared/ui/Button';
import MenuIcon from 'shared/assets/icons/menu-icon.svg';
import HomeIcon from 'shared/assets/icons/home-icon.svg';
import AboutIcon from 'shared/assets/icons/about-icon.svg';
import ThemeButton from 'shared/ui/Button/consts/ThemeButton';
import ThemeSwitcher from 'widgets/ThemeSwitcher';
import LangSwitcher from 'widgets/LangSwitcher';
import AppLink from 'shared/ui/AppLink';
import AppLinkThemes from 'shared/ui/AppLink/consts/AppLinkThemes';
import {useTranslation} from 'react-i18next';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';

interface ISidebarProps {
    className?: string;
}

const Sidebar: React.FC<ISidebarProps> = ({className}: ISidebarProps): JSX.Element => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const {t} = useTranslation();

    function onToggle(): void {
        setCollapsed((prevState) => !prevState);
    }
    return (
        <div data-testid={'sidebar'} className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button data-testid={'sidebar-toggle'} className={cls.burger} theme={ThemeButton.OUTLINE} onClick={onToggle}>
                <MenuIcon className={cls.icon}/>
            </Button>
            <div className={cls.items}>
                <AppLink className={cls.item} theme={AppLinkThemes.SECONDARY} to={RoutePath.main}>
                    <HomeIcon className={cls.icon}/>
                    <span className={cls.link}>{t('Main')}</span>
                </AppLink>
                <AppLink className={cls.item} theme={AppLinkThemes.SECONDARY} to={RoutePath.about}>
                    <AboutIcon className={cls.icon}/>
                    <span className={cls.link}>{t('About')}</span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <LangSwitcher className={cls.lang}/>
                <ThemeSwitcher/>
            </div>
        </div>
    );
};

export default Sidebar;
