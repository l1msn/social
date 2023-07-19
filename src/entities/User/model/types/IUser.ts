interface IUser {
    id: string | number,
    username: string
}

interface IUserScheme {
    authData?: IUser;
    init: boolean;
}

export {IUser, IUserScheme};
