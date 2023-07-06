import {ICounterSchema} from 'entities/Counter';
import {IUserScheme} from 'entities/User';


interface IStateSchema {
    counter: ICounterSchema;
    user: IUserScheme;
}

export {IStateSchema};
