import React, {JSX, useMemo} from 'react';
import {useSelector} from 'react-redux';
import {getUserAuthData, getUserRoles, UserRole} from '@/entities/User';
import {Navigate, useLocation} from 'react-router-dom';

import {RoutePath} from '@/shared/consts/routerPaths';

interface IRequireAuth {
    children: JSX.Element,
    roles?: UserRole[]
}

function RequireAuth({children, roles}: IRequireAuth) {
    const location = useLocation();
    const auth = useSelector(getUserAuthData);

    const userRoles = useSelector(getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }
        return roles.some((requiredRole) => userRoles?.includes(requiredRole));
    }, [roles, userRoles]);

    if (!auth) {
        return <Navigate to={RoutePath.main} state={{from: location}} replace />;
    }

    if (!hasRequiredRoles) {
        return <Navigate to={RoutePath.forbidden} state={{from: location}} replace />;
    }

    return children;
}

export default RequireAuth;


