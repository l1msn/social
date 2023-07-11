import getUserAuthData from './model/selectors/getUserAuthData';
import {userActions, userReducer} from './model/slice/userSlice';
import {IUser, IUserScheme} from './model/types/IUser';

export {userReducer, userActions, IUser, IUserScheme, getUserAuthData};
