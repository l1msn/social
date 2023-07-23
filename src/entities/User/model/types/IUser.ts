interface IUser {
    id: string | number,
    username: string
    avatar?: string;
}

interface IUserScheme {
    authData?: IUser;
    init: boolean;
}

export {IUser, IUserScheme};
