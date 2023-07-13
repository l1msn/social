import {IUserScheme} from 'entities/User';
import {ILoginSchema} from 'features/AuthByUsername';
import {IProfileSchema} from 'entities/Profile';


interface IStateSchema {
    user?: IUserScheme;
    loginForm?: ILoginSchema;
    profile?: IProfileSchema
}

export default IStateSchema;
