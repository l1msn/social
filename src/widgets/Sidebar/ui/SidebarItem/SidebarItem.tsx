import React, {JSX, memo} from 'react';
import cls from './SidebarItem.module.scss';
import AppLinkThemes from 'shared/ui/AppLink/consts/AppLinkThemes';
import AppLink from 'shared/ui/AppLink';
import {ISidebarItemType} from '../../model/ISidebarItemType';
import {useTranslation} from 'react-i18next';
import classNames from 'shared/lib/classNames/classNames';
import {useSelector} from 'react-redux';
import {getUserAuthData} from 'entities/User';


interface ISidebarItemProps {
    item: ISidebarItemType,
    collapsed: boolean,
    authOnly?: boolean;
}

const SidebarItem: React.FC<ISidebarItemProps> = memo(({item, collapsed}: ISidebarItemProps): React.JSX.Element | null => {
    const {t} = useTranslation('sidebar');

    const isAuth = useSelector(getUserAuthData);

    if (item.authOnly && !isAuth) {
        return null;
    }

    return (
        <AppLink className={classNames(cls.item, {[cls.collapsed]: collapsed})}
            theme={AppLinkThemes.SECONDARY} to={item.path}>
            <item.Icon className={cls.icon}/>
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
});

export default SidebarItem;


