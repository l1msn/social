import {IUserScheme} from '@/entities/User';
import {ILoginSchema} from '@/features/authByUsername';
import {IArticleSchema} from '@/entities/Article';
import {IArticleDetailsPageSchema} from '@/pages/ArticleDetailsPage';
import {IAddCommentFormSchema} from '@/features/addCommentForm';
import {IArticlePageSchema} from '@/pages/ArticlePage';
import {IScrollSchema} from '@/features/scrollRestore';
import rtkApi from '@/shared/api/rtkApi';
import {IProfileSchema} from '@/features/editableProfileCard';


interface IStateSchema {
    user: IUserScheme;
    scrollRestore: IScrollSchema;

    [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

    loginForm?: ILoginSchema;
    profile?: IProfileSchema;
    article?: IArticleSchema;
    addCommentForm?: IAddCommentFormSchema;
    articlesPage?: IArticlePageSchema;
    articleDetailsPage?: IArticleDetailsPageSchema;
}

export default IStateSchema;
