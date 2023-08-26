import React, { memo } from 'react';
import cls from './SidebarItem.module.scss';
import AppLinkThemes from '@/shared/ui/deprecated/AppLink/consts/AppLinkThemes';
import { default as AppLinkDeprecated } from '@/shared/ui/deprecated/AppLink';
import ISidebar from '../../model/types/ISidebar';
import { useTranslation } from 'react-i18next';
import classNames from '@/shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { UserSelectors } from '@/entities/User';
import { ToggleFeatures } from '@/shared/features';
import AppLink from '@/shared/ui/redesigned/AppLink';
import Icon from '@/shared/ui/redesigned/Icon';

interface ISidebarItemProps {
    item: ISidebar;
    collapsed: boolean;
}

const SidebarItem: React.FC<ISidebarItemProps> = memo(
    ({ item, collapsed }: ISidebarItemProps): React.JSX.Element | null => {
        const { t } = useTranslation('sidebar');

        const isAuth = useSelector(UserSelectors.getUserAuthData);

        if (item.authOnly && !isAuth) {
            return null;
        }

        const RedesignedSidebarItem = (
            <AppLink
                to={item.path}
                className={classNames(cls.itemRedesigned, {
                    [cls.collapsedRedesigned]: collapsed,
                })}
                activeClassName={cls.active}
            >
                <Icon Svg={item.Icon} />
                <span className={cls.link}>{t(item.text)}</span>
            </AppLink>
        );

        const DeprecatedSidebarItem = (
            <AppLinkDeprecated
                theme={AppLinkThemes.SECONDARY}
                to={item.path}
                className={classNames(cls.item, { [cls.collapsed]: collapsed })}
            >
                <item.Icon className={cls.icon} />
                <span className={cls.link}>{t(item.text)}</span>
            </AppLinkDeprecated>
        );

        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                off={DeprecatedSidebarItem}
                on={RedesignedSidebarItem}
            />
        );
    },
);

export default SidebarItem;
