import {RouteProps} from 'react-router-dom';
import {MainPage} from 'pages/MainPage';
import {AboutPage} from 'pages/AboutPage';
import NotFoundPage from 'pages/NotFoundPage';
import {ProfilePage} from 'pages/ProfilePage';
import {ArticlePage} from 'pages/ArticlePage';
import {ArticleDetailsPage} from 'pages/ArticleDetailsPage';
import {ArticleEditPage} from 'pages/ArticleEditPage';

type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
}

enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLES_DETAILS = 'articles_details',
    ARTICLES_CREATE = 'articles_create',
    ARTICLES_EDIT = 'articles_edit',
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
    [AppRoutes.NOTFOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage/>,
    },
};

export {AppRoutes, RoutePath, routeConfig, AppRoutesProps};
