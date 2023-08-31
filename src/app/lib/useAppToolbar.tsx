import { AppRoutes } from '@/shared/consts/routerPaths';
import useRouteChange from '@/shared/lib/hooks/useRouteChange/useRouteChange';
import ScrollToolbar from '@/widgets/ScrollToolbar';

function useAppToolbar() {
    const appRoutes = useRouteChange();

    const toolbarByAppRoute: OptionalRecord<AppRoutes, React.ReactElement> = {
        [AppRoutes.ARTICLES]: <ScrollToolbar />,
        [AppRoutes.ARTICLE_DETAILS]: <ScrollToolbar />,
        [AppRoutes.MAIN]: <div />,
        [AppRoutes.ABOUT]: <div />,
    };

    return toolbarByAppRoute[appRoutes];
}

export default useAppToolbar;
