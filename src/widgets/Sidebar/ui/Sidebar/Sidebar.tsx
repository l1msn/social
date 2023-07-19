import React, {JSX, memo, useMemo, useState} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import Button from 'shared/ui/Button';
import MenuIcon from 'shared/assets/icons/menu-icon.svg';
import ThemeButton from 'shared/ui/Button/consts/ThemeButton';
import ThemeSwitcher from 'widgets/ThemeSwitcher';
import LangSwitcher from 'widgets/LangSwitcher';
import {SidebarItemsList} from 'widgets/Sidebar/model/ISidebarItemType';
import SidebarItem from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';

interface ISidebarProps {
    className?: string;
}

const Sidebar: React.FC<ISidebarProps> = memo(({className}: ISidebarProps): JSX.Element => {
    const [collapsed, setCollapsed] = useState<boolean>(false);

    const onToggle = () => {
        setCollapsed((prevState) => !prevState);
    };

    const itemsList = useMemo(() => SidebarItemsList.map((item) => (
        <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
    )), [collapsed]);

    return (
        <div data-testid={'sidebar'} className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <Button data-testid={'sidebar-toggle'} className={cls.burger} theme={ThemeButton.OUTLINE} onClick={onToggle}>
                <MenuIcon className={cls.icon}/>
            </Button>
            <div className={cls.items}>
                {itemsList}
            </div>
            <div className={cls.switchers}>
                <LangSwitcher className={cls.lang}/>
                <ThemeSwitcher/>
            </div>
        </div>
    );
});

export default Sidebar;
