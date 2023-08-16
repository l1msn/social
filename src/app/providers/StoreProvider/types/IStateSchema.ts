import {IUserScheme} from '@/entities/User';
import {ILoginSchema} from 'src/features/AuthByUsername';
import {IArticleSchema} from '@/entities/Article';
import {IArticleDetailsPageSchema} from '@/pages/ArticleDetailsPage';
import {IAddCommentFormSchema} from 'src/features/AddCommentForm';
import {IArticlesPageSchema} from 'src/pages/ArticlesPage';
import {IScrollSchema} from 'src/features/ScrollRestore';
import rtkApi from '@/shared/api/rtkApi';
import {IProfileSchema} from 'src/features/EditableProfileCard';


interface IStateSchema {
    user: IUserScheme;
    scrollRestore: IScrollSchema;

    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

    loginForm?: ILoginSchema;
    profile?: IProfileSchema;
    article?: IArticleSchema;
    addCommentForm?: IAddCommentFormSchema;
    articlesPage?: IArticlesPageSchema;
    articleDetailsPage?: IArticleDetailsPageSchema;
}

export default IStateSchema;
