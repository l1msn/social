enum AppRoutes {
    MAIN = 'main',
    SETTINGS = 'settings',
    ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    ARTICLE_CREATE = 'article_create',
    ARTICLE_EDIT = 'article_edit',
    ADMIN_PANEL = 'admin_panel',
    FORBIDDEN = 'forbidden',
    NOT_FOUND = 'not_found',
}

class RoutePaths {
    static getRouteMain() {
        return '/';
    }
    static getRouteAbout() {
        return '/about';
    }
    static getRouteSettings() {
        return '/settings';
    }
    static getRouteProfile(id: string | number) {
        return '/profile/' + id.toString();
    }
    static getRouteArticles() {
        return '/articles';
    }
    static getRouteArticleDetails(id: string | number) {
        return '/articles/' + id.toString();
    }
    static getRouteArticleCreate() {
        return '/article/new';
    }
    static getRouteArticleEdit(id: string | number) {
        return '/articles/' + id.toString() + '/edit';
    }
    static getRouteAdminPanel() {
        return '/admin';
    }
    static getRouteForbidden() {
        return '/forbidden';
    }
}
export { AppRoutes, RoutePaths };
