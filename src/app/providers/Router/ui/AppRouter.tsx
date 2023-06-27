import React, {JSX, Suspense} from 'react';
import {Route, Routes} from 'react-router-dom';
import {routeConfig} from 'shared/config/routeConfig/routeConfig';

const AppRouter: React.FC = (): JSX.Element => {
  return (
    <Suspense fallback={<div> Loading... </div>}>
      <Routes>
        {Object.values(routeConfig).map(({path, element}) =>
          <Route key={path} path={path} element={<div className={'page-wrapper'}>{element}</div>}/>,
        )}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
