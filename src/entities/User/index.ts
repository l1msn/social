import UserSelectors from './model/selectors/UserSelectors';
import { userActions, userReducer } from './model/slice/userSlice';
import { IUser, IUserScheme } from './model/types/IUser';
import UserRole from './model/types/UserRole';

export { userReducer, userActions, UserRole, UserSelectors };

export type { IUser, IUserScheme };
