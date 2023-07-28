import {IStateSchema} from 'app/providers/StoreProvider';

const getArticleCommentsIsLoading = (state: IStateSchema) => state?.articleDetailsComments?.isLoading || false;

export default getArticleCommentsIsLoading;
