import {ICounterSchema} from 'entities/Counter';
import {IUserScheme} from 'entities/User';
import {ILoginSchema} from 'features/AuthByUsername';


interface IStateSchema {
    counter: ICounterSchema;
    user: IUserScheme;
    loginForm?: ILoginSchema;
}

export default IStateSchema;
