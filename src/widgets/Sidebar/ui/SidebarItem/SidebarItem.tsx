import React, {JSX, memo} from 'react';
import cls from './SidebarItem.module.scss';
import AppLinkThemes from 'shared/ui/AppLink/consts/AppLinkThemes';
import AppLink from 'shared/ui/AppLink';
import {ISidebarItemType} from '../../model/ISidebarItemType';
import {useTranslation} from 'react-i18next';
import classNames from 'shared/lib/classNames/classNames';


interface ISidebarItemProps {
    item?: ISidebarItemType,
    collapsed: boolean;
}

const SidebarItem: React.FC<ISidebarItemProps> = memo(({item, collapsed}: ISidebarItemProps): JSX.Element => {
    const {t} = useTranslation('sidebar');
    return (
        <AppLink className={classNames(cls.item, {[cls.collapsed]: collapsed})}
            theme={AppLinkThemes.SECONDARY} to={item.path}>
            <item.Icon className={cls.icon}/>
            <span className={cls.link}>{t(item.text)}</span>
        </AppLink>
    );
});

export default SidebarItem;


