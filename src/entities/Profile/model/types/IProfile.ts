import {Country, Currency} from 'shared/consts/common';


interface IProfile {
    first: string,
    lastname: string,
    age: number,
    currency: Currency,
    country: Country,
    city: string,
    username: string,
    avatar: string
}

interface IProfileSchema {
    data?: IProfile,
    isLoading?: boolean,
    error?: string,
    readonly?: boolean;
}

export {IProfile, IProfileSchema};
