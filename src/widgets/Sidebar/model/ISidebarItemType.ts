import React from 'react';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home-icon.svg';
import AboutIcon from 'shared/assets/icons/about-icon.svg';
import UserIcon from 'shared/assets/icons/user-icon.svg';
import ArticlesIcon from 'shared/assets/icons/articles-icon.svg';

interface ISidebarItemType {
    path: string,
    text: string,
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>,
    authOnly?: boolean;
}

const SidebarItemsList: ISidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: HomeIcon,
        text: 'Main',
    },
    {
        path: RoutePath.profile,
        Icon: UserIcon,
        text: 'Profile',
        authOnly: true,
    },
    {
        path: RoutePath.articles,
        Icon: ArticlesIcon,
        text: 'Articles',
        authOnly: true,
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'About',
    },
];

export {SidebarItemsList, ISidebarItemType};
