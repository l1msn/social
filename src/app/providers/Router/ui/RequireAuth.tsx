import React, {JSX} from 'react';
import {useSelector} from 'react-redux';
import {getUserAuthData} from 'entities/User';
import {Navigate, useLocation} from 'react-router-dom';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';

function RequireAuth({children}: { children: JSX.Element}) {
    const location = useLocation();
    const auth = useSelector(getUserAuthData);
    console.log(auth);

    return auth ? children : <Navigate to={RoutePath.main} state={{from: location}} replace />;
}

export default RequireAuth;


