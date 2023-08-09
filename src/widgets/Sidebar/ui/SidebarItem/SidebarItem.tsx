import React, {memo} from 'react';
import cls from './SidebarItem.module.scss';
import AppLinkThemes from '@/shared/ui/AppLink/consts/AppLinkThemes';
import AppLink from '@/shared/ui/AppLink';
import ISidebar from '../../model/types/ISidebar';
import {useTranslation} from 'react-i18next';
import classNames from '@/shared/lib/classNames/classNames';
import {useSelector} from 'react-redux';
import {getUserAuthData} from '@/entities/User';


interface ISidebarItemProps {
    item: ISidebar,
    collapsed: boolean,
}

const SidebarItem: React.FC<ISidebarItemProps> = memo(({item, collapsed}: ISidebarItemProps): React.JSX.Element | null => {
    const {t} = useTranslation('sidebar');

    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink
            theme={AppLinkThemes.SECONDARY}
            to={item.path}
            className={classNames(cls.item, {[cls.collapsed]: collapsed})}
        >
            <item.Icon className={cls.icon} />
            <span className={cls.link}>
                {t(item.text)}
            </span>
        </AppLink>
    );
});

export default SidebarItem;


