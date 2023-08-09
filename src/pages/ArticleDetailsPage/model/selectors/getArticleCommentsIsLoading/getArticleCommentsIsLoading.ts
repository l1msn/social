import {IStateSchema} from '@/app/providers/StoreProvider';

const getArticleCommentsIsLoading = (state: IStateSchema) => state?.articleDetailsPage?.comments?.isLoading || false;

export default getArticleCommentsIsLoading;
