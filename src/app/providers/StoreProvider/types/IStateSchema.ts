import {IUserScheme} from 'entities/User';
import {ILoginSchema} from 'features/AuthByUsername';
import {IProfileSchema} from 'entities/Profile';
import {IArticleSchema} from 'entities/Article/model';


interface IStateSchema {
    user: IUserScheme;
    loginForm?: ILoginSchema;
    profile?: IProfileSchema;
    article?: IArticleSchema;
}

export default IStateSchema;
