import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { UserRole } from '@/entities/User';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import NotFoundPage from '@/pages/NotFoundPage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { AppRoutes, RoutePaths } from '@/shared/consts/routerPaths';
import { AppRoutesProps } from '@/shared/types/router';
import { SettingsPage } from '@/pages/SettingsPage';

const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePaths.getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.SETTINGS]: {
        path: RoutePaths.getRouteSettings(),
        element: <SettingsPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePaths.getRouteAbout(),
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePaths.getRouteProfile(':id'),
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePaths.getRouteArticles(),
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: RoutePaths.getRouteArticleDetails(':id'),
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: RoutePaths.getRouteArticleCreate(),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: RoutePaths.getRouteArticleEdit(':id'),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: RoutePaths.getRouteAdminPanel(),
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.MANAGER, UserRole.ADMIN],
    },
    [AppRoutes.FORBIDDEN]: {
        path: RoutePaths.getRouteForbidden(),
        element: <ForbiddenPage />,
    },
    // last
    [AppRoutes.NOT_FOUND]: {
        path: '*',
        element: <NotFoundPage />,
    },
};

export { routeConfig };
