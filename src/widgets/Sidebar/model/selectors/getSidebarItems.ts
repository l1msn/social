import { UserSelectors } from '@/entities/User';
import HomeIconDeprecated from '@/shared/assets/icons/deprecated/home-icon.svg';
import UserIconDeprecated from '@/shared/assets/icons/deprecated/user-icon.svg';
import ArticlesIconDeprecated from '@/shared/assets/icons/deprecated/articles-icon.svg';
import HomeIconRedesigned from '@/shared/assets/icons/redesigned/home.svg';
import UserIconRedesigned from '@/shared/assets/icons/redesigned/avatar.svg';
import ArticlesIconRedesigned from '@/shared/assets/icons/redesigned/article.svg';
import ISidebar from '../types/ISidebar';
import { RoutePaths } from '@/shared/consts/routerPaths';
import { toggleFeatures } from '@/shared/features';
import { useSelector } from 'react-redux';

const useSidebarItems = () => {
    const userData = useSelector(UserSelectors.getUserAuthData);
    const SidebarItemsList: ISidebar[] = [
        {
            path: RoutePaths.getRouteMain(),
            Icon: toggleFeatures({
                name: 'isAppRedesigned',
                off: () => HomeIconDeprecated,
                on: () => HomeIconRedesigned,
            }),
            text: 'Main',
        },
        // {
        //     path: RoutePaths.getRouteAbout(),
        //     Icon: toggleFeatures({
        //         name: 'isAppRedesigned',
        //         off: () => AboutIconDeprecated,
        //         on: () => AboutIconRedesigned,
        //     }),
        //     text: 'About',
        // },
    ];
    if (userData) {
        SidebarItemsList.push(
            {
                path: RoutePaths.getRouteProfile(userData.id),
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => UserIconDeprecated,
                    on: () => UserIconRedesigned,
                }),
                text: 'Profile',
                authOnly: true,
            },
            {
                path: RoutePaths.getRouteArticles(),
                Icon: toggleFeatures({
                    name: 'isAppRedesigned',
                    off: () => ArticlesIconDeprecated,
                    on: () => ArticlesIconRedesigned,
                }),
                text: 'Articles',
                authOnly: true,
            },
        );
    }
    return SidebarItemsList;
};

export default useSidebarItems;
