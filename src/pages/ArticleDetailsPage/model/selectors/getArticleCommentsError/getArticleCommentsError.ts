import {IStateSchema} from 'app/providers/StoreProvider';


const getArticleCommentsError = (state: IStateSchema) => state?.articleDetailsPage?.comments?.error || '';

export default getArticleCommentsError;
