import React, {JSX, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routeConfig} from 'shared/config/routeConfig/routeConfig';
import PageLoader from 'widgets/PageLoader/ui/PageLoader';

const AppRouter: React.FC = (): JSX.Element => {
    return (
        <Routes>
            {Object.values(routeConfig).map(({path, element}) =>
                <Route key={path} path={path} element={
                    <Suspense fallback={<PageLoader/>}>
                        <div className={'page-wrapper'}>{element}</div>
                    </Suspense>
                }/>,
            )}
        </Routes>
    );
};

export default AppRouter;
