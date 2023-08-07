import {createSelector} from '@reduxjs/toolkit';
import {getUserAuthData} from 'entities/User';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home-icon.svg';
import UserIcon from 'shared/assets/icons/user-icon.svg';
import ArticlesIcon from 'shared/assets/icons/articles-icon.svg';
import AboutIcon from 'shared/assets/icons/about-icon.svg';
import ISidebar from '../types/ISidebar';


const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const SidebarItemsList: ISidebar[] = [
            {
                path: RoutePath.main,
                Icon: HomeIcon,
                text: 'Main',
            },
            {
                path: RoutePath.about,
                Icon: AboutIcon,
                text: 'About',
            }];
        if (userData) {
            SidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
                    Icon: UserIcon,
                    text: 'Profile',
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    Icon: ArticlesIcon,
                    text: 'Articles',
                    authOnly: true,
                });
        }
        return SidebarItemsList;
    },
);

export default getSidebarItems;
