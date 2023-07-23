import {IStateSchema} from 'app/providers/StoreProvider';


const getArticleCommentsError = (state: IStateSchema) => state?.articleDetailsComments?.error || '';

export default getArticleCommentsError;
