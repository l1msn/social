import {IStateSchema} from 'app/providers/StoreProvider';

const getArticlePageInit = (state: IStateSchema) => state.articlesPage?.init;

export default getArticlePageInit;
