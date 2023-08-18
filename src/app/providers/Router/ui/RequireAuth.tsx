import React, { JSX, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { UserSelectors, UserRole } from '@/entities/User';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePaths } from '@/shared/consts/routerPaths';

interface IRequireAuth {
    children: JSX.Element;
    roles?: UserRole[];
}

function RequireAuth({ children, roles }: IRequireAuth) {
    const location = useLocation();
    const auth = useSelector(UserSelectors.getUserAuthData);

    const userRoles = useSelector(UserSelectors.getUserRoles);

    const hasRequiredRoles = useMemo(() => {
        if (!roles) {
            return true;
        }
        return roles.some((requiredRole) => userRoles?.includes(requiredRole));
    }, [roles, userRoles]);

    if (!auth) {
        return (
            <Navigate
                to={RoutePaths.getRouteMain()}
                state={{ from: location }}
                replace
            />
        );
    }

    if (!hasRequiredRoles) {
        return (
            <Navigate
                to={RoutePaths.getRouteForbidden()}
                state={{ from: location }}
                replace
            />
        );
    }

    return children;
}

export default RequireAuth;
