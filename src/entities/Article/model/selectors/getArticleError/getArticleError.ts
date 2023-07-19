import {IStateSchema} from 'app/providers/StoreProvider';


const getArticleError = (state: IStateSchema) => state?.article?.error || '';

export default getArticleError;
