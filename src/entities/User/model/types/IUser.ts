import UserRole from '../types/UserRole';

interface IUser {
    id: string | number,
    username: string
    avatar?: string;
    roles?: UserRole[];
}

interface IUserScheme {
    authData?: IUser;
    init: boolean;
}

export {IUser, IUserScheme};
