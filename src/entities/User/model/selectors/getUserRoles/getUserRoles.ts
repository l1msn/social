import {IStateSchema} from '@/app/providers/StoreProvider';
import {createSelector} from '@reduxjs/toolkit';
import UserRole from '../../types/UserRole';

const getUserRoles = (state: IStateSchema) => state.user.authData?.roles;

const isUserAdmin = createSelector(getUserRoles,
    (roles) => Boolean(roles?.includes(UserRole.ADMIN)),
);

const isUserManager = createSelector(getUserRoles,
    (roles) => Boolean(roles?.includes(UserRole.MANAGER)),
);

export {isUserAdmin, isUserManager, getUserRoles};
