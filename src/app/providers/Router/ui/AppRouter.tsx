import React, {JSX, memo, Suspense, useMemo} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routeConfig} from 'shared/config/routeConfig/routeConfig';
import PageLoader from 'widgets/PageLoader/ui/PageLoader';
import {useSelector} from 'react-redux';
import {getUserAuthData} from 'entities/User';

const AppRouter: React.FC = memo((): JSX.Element => {
    const isAuth = useSelector(getUserAuthData);

    const routes = useMemo(() => {
        return Object.values(routeConfig).filter((route) => {
            return !(route.authOnly && !isAuth);
        });
    }, [isAuth]);

    return (
        <Routes>
            {routes.map(({path, element}) =>
                <Route key={path} path={path} element={
                    <Suspense fallback={<PageLoader/>}>
                        <div className={'page-wrapper'}>{element}</div>
                    </Suspense>
                }/>,
            )}
        </Routes>
    );
});

export default AppRouter;
