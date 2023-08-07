import {IProfile} from 'entities/Profile';

enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

interface IProfileSchema {
    data?: IProfile,
    isLoading?: boolean,
    error?: string,
    readonly?: boolean,
    form?: IProfile,
    validateError?: ValidateProfileError[];
}

export {ValidateProfileError, type IProfileSchema};
