import { createSelector } from '@reduxjs/toolkit';
import { UserSelectors } from '@/entities/User';
import HomeIcon from '@/shared/assets/icons/home-icon.svg';
import UserIcon from '@/shared/assets/icons/user-icon.svg';
import ArticlesIcon from '@/shared/assets/icons/articles-icon.svg';
import AboutIcon from '@/shared/assets/icons/about-icon.svg';
import ISidebar from '../types/ISidebar';
import { RoutePaths } from '@/shared/consts/routerPaths';

const getSidebarItems = createSelector(
    UserSelectors.getUserAuthData,
    (userData) => {
        const SidebarItemsList: ISidebar[] = [
            {
                path: RoutePaths.getRouteMain(),
                Icon: HomeIcon,
                text: 'Main',
            },
            {
                path: RoutePaths.getRouteAbout(),
                Icon: AboutIcon,
                text: 'About',
            },
        ];
        if (userData) {
            SidebarItemsList.push(
                {
                    path: RoutePaths.getRouteProfile(userData.id),
                    Icon: UserIcon,
                    text: 'Profile',
                    authOnly: true,
                },
                {
                    path: RoutePaths.getRouteArticles(),
                    Icon: ArticlesIcon,
                    text: 'Articles',
                    authOnly: true,
                },
            );
        }
        return SidebarItemsList;
    },
);

export default getSidebarItems;
