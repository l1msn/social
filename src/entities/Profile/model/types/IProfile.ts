import {Currency} from 'entities/Currency';
import {Country} from 'entities/Country';

enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}


interface IProfile {
    id?: string | number,
    first?: string,
    lastname?: string,
    age?: number | string,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string;
}

interface IProfileSchema {
    data?: IProfile,
    isLoading?: boolean,
    error?: string,
    readonly?: boolean,
    form?: IProfile,
    validateError?: ValidateProfileError[];
}

export {IProfile, IProfileSchema, ValidateProfileError};
