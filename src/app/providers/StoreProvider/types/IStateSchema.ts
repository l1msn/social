import {IUserScheme} from 'entities/User';
import {ILoginSchema} from 'features/AuthByUsername';
import {IProfileSchema} from 'entities/Profile';
import {IArticleSchema} from 'entities/Article/model';
import {IArticleDetailsCommentsSchema} from 'pages/ArticleDetailsPage';
import {IAddCommentFormSchema} from 'features/AddCommentForm';
import {IArticlePageSchema} from 'pages/ArticlePage';


interface IStateSchema {
    user: IUserScheme;
    loginForm?: ILoginSchema;
    profile?: IProfileSchema;
    article?: IArticleSchema;
    articleDetailsComments?: IArticleDetailsCommentsSchema;
    addCommentForm?: IAddCommentFormSchema;
    articlesPage?: IArticlePageSchema;
}

export default IStateSchema;
