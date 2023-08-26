import { IUserScheme } from '@/entities/User';
import { ILoginSchema } from '@/features/AuthByUsername';
import { IArticleSchema } from '@/entities/Article';
import { IArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage';
import { IAddCommentFormSchema } from '@/features/AddCommentForm';
import { IArticlesPageSchema } from '@/pages/ArticlesPage';
import { IScrollSchema } from '@/features/ScrollRestore';
import rtkApi from '@/shared/api/rtkApi';
import { IProfileSchema } from '@/features/EditableProfileCard';

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
