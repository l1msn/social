import {IUserScheme} from 'entities/User';
import {ILoginSchema} from 'features/AuthByUsername';
import {IProfileSchema} from 'entities/Profile';
import {IArticleSchema} from 'entities/Article/model';
import {IArticleDetailsCommentsSchema} from 'pages/ArticleDetailsPage';


interface IStateSchema {
    user: IUserScheme;
    loginForm?: ILoginSchema;
    profile?: IProfileSchema;
    article?: IArticleSchema;
    articleDetailsComments?: IArticleDetailsCommentsSchema;
}

export default IStateSchema;
