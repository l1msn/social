import React, { JSX, memo, useMemo, useState } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import Button from '@/shared/ui/Button';
import MenuIcon from '@/shared/assets/icons/menu-icon.svg';
import ThemeButton from '@/shared/ui/Button/consts/ThemeButton';
import SidebarItem from '../SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import getSidebarItems from '../../model/selectors/getSidebarItems';
import LangSwitcher from '@/features/LangSwitcher';
import ThemeSwitcher from '@/features/ThemeSwitcher';
import { VStack } from '@/shared/ui/Stack';
import { ToggleFeatures } from '@/shared/features';
import { AppLogo } from '@/shared/ui/AppLogo';

interface ISidebarProps {
    className?: string;
}

const Sidebar: React.FC<ISidebarProps> = memo(
    ({ className }: ISidebarProps): JSX.Element => {
        const [collapsed, setCollapsed] = useState<boolean>(true);

        const onToggle = () => {
            setCollapsed((prevState) => !prevState);
        };

        const sidebarItemsList = useSelector(getSidebarItems);

        const itemsList = useMemo(
            () =>
                sidebarItemsList.map((item) => (
                    <SidebarItem
                        item={item}
                        collapsed={collapsed}
                        key={item.path}
                    />
                )),
            [sidebarItemsList, collapsed],
        );

        const DeprecatedSidebar = (
            <aside
                data-testid={'sidebar'}
                className={classNames(
                    cls.Sidebar,
                    { [cls.collapsed]: collapsed },
                    [className],
                )}
            >
                <Button
                    data-testid={'sidebar-toggle'}
                    className={cls.burger}
                    theme={ThemeButton.OUTLINE}
                    onClick={onToggle}
                >
                    <MenuIcon className={cls.icon} />
                </Button>
                <VStack role={'navigation'} gap={'8'} className={cls.items}>
                    {itemsList}
                </VStack>
                <div className={cls.switchers}>
                    <LangSwitcher className={cls.lang} />
                    <ThemeSwitcher />
                </div>
            </aside>
        );

        const RedesignedSidebar = (
            <aside
                data-testid={'sidebar'}
                className={classNames(
                    cls.SidebarRedesigned,
                    { [cls.collapsed]: collapsed },
                    [className],
                )}
            >
                <AppLogo className={cls.appLogo} />
                {/* <Button*/}
                {/*    data-testid={'sidebar-toggle'}*/}
                {/*    className={cls.burger}*/}
                {/*    theme={ThemeButton.OUTLINE}*/}
                {/*    onClick={onToggle}*/}
                {/* >*/}
                {/*    <MenuIcon className={cls.icon} />*/}
                {/* </Button>*/}
                {/* <VStack role={'navigation'} gap={'8'} className={cls.items}>*/}
                {/*    {itemsList}*/}
                {/* </VStack>*/}
                {/* <div className={cls.switchers}>*/}
                {/*    <LangSwitcher className={cls.lang} />*/}
                {/*    <ThemeSwitcher />*/}
                {/* </div>*/}
            </aside>
        );

        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={RedesignedSidebar}
                off={DeprecatedSidebar}
            />
        );
    },
);

export default Sidebar;
