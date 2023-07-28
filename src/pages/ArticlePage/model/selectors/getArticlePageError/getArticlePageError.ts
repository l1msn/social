import {IStateSchema} from 'app/providers/StoreProvider';

const getArticlePageError = (state: IStateSchema) => state.articlesPage?.error;

export default getArticlePageError;
