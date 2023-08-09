import React, {JSX, memo, Suspense, useCallback} from 'react';
import {Route, Routes} from 'react-router-dom';
import PageLoader from '@/widgets/PageLoader/ui/PageLoader';
import {AppRoutesProps, routeConfig} from '@/shared/config/routeConfig/routeConfig';
import RequireAuth from './RequireAuth';

const AppRouter: React.FC = memo((): JSX.Element => {
    const renderWithWrapper = useCallback((route: AppRoutesProps) => {
        const element = (
            <Suspense fallback={<PageLoader />}>
                {route.element}
            </Suspense>
        );
        return (
            <Route
                key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
});

export default AppRouter;
