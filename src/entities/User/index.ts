import getUserAuthData from './model/selectors/getUserAuthData/getUserAuthData';
import getUserInit from './model/selectors/getUserInited/getUserInit';
import {getUserRoles, isUserAdmin, isUserManager} from './model/selectors/getUserRoles/getUserRoles';
import {userActions, userReducer} from './model/slice/userSlice';
import {IUser, IUserScheme} from './model/types/IUser';
import UserRole from './model/types/UserRole';

export {
    userReducer, userActions, UserRole,
    getUserAuthData, getUserInit, isUserAdmin,
    isUserManager, getUserRoles,
};

export type {IUser, IUserScheme};
