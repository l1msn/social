import {IStateSchema} from '@/app/providers/StoreProvider';
import {createSelector} from '@reduxjs/toolkit';
import UserRole from '../types/UserRole';

class UserSelectors {
    static getUserAuthData = (state: IStateSchema) => state.user.authData;
    static getUserInit = (state: IStateSchema) => state.user.init;
    static getUserRoles = (state: IStateSchema) => state.user.authData?.roles;
    static isUserAdmin = createSelector(this.getUserRoles,
        (roles) => Boolean(roles?.includes(UserRole.ADMIN)),
    );
    static isUserManager = createSelector(this.getUserRoles,
        (roles) => Boolean(roles?.includes(UserRole.MANAGER)),
    );
}

export default UserSelectors;
