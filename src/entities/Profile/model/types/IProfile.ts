import {Currency} from 'entities/Currency';
import {Country} from 'entities/Country';


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

export {IProfile};
