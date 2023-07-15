import {Currency} from 'entities/Currency';
import {Country} from 'entities/Country';


interface IProfile {
    first?: string,
    lastname?: string,
    age?: number | string,
    currency?: Currency,
    country?: Country,
    city?: string,
    username?: string,
    avatar?: string
}

interface IProfileSchema {
    data?: IProfile,
    isLoading?: boolean,
    error?: string,
    readonly?: boolean,
    form?: IProfile;
}

export {IProfile, IProfileSchema};
