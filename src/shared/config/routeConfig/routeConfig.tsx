import {RouteProps} from 'react-router-dom';
import {MainPage} from '@/pages/MainPage';
import {AboutPage} from '@/pages/AboutPage';
import NotFoundPage from '@/pages/NotFoundPage';
import {ProfilePage} from '@/pages/ProfilePage';
import {ArticlePage} from '@/pages/ArticlePage';
import {ArticleDetailsPage} from '@/pages/ArticleDetailsPage';
import {ArticleEditPage} from '@/pages/ArticleEditPage';
import {AdminPanelPage} from '@/pages/AdminPanelPage';
import {UserRole} from '@/entities/User';
import {ForbiddenPage} from '@/pages/ForbiddenPage';

type AppRoutesProps = RouteProps & {
    authOnly?: boolean,
    roles?: UserRole[];
}

enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLES_DETAILS = 'articles_details',
    ARTICLES_CREATE = 'articles_create',
    ARTICLES_EDIT = 'articles_edit',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN_PAGE = 'forbidden_page',
    NOTFOUND = 'not_found',
}

const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile/',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLES_CREATE]: '/articles/new',
    [AppRoutes.ARTICLES_EDIT]: '/articles/:id/edit',
    [AppRoutes.ARTICLES_DETAILS]: '/articles/',
    [AppRoutes.ADMIN_PANEL]: '/admin',
    [AppRoutes.FORBIDDEN_PAGE]: '/forbidden_page',
    [AppRoutes.NOTFOUND]: '*',
};

const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile + ':id',
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES_DETAILS]: {
        path: RoutePath.articles_details + ':id',
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES_CREATE]: {
        path: RoutePath.articles_create,
        element: <ArticleEditPage/>,
        authOnly: true,
    },
    [AppRoutes.ARTICLES_EDIT]: {
        path: RoutePath.articles_edit,
        element: <ArticleEditPage/>,
        authOnly: true,
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: RoutePath.admin_panel,
        element: <AdminPanelPage/>,
        authOnly: true,
        roles: [UserRole.ADMIN, UserRole.MANAGER],
    },
    [AppRoutes.FORBIDDEN_PAGE]: {
        path: RoutePath.forbidden_page,
        element: <ForbiddenPage/>,
    },
    [AppRoutes.NOTFOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>,
    },
};

export {AppRoutes, RoutePath, routeConfig};
export type {AppRoutesProps};
