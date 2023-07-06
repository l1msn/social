interface IUser {
    id: number,
    username: string
}

interface IUserScheme {
    authData?: IUser;
}

export {IUser, IUserScheme};
