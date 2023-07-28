import {IStateSchema} from 'app/providers/StoreProvider';

const getArticlePageIsLoading = (state: IStateSchema) => state.articlesPage?.isLoading || false;

export default getArticlePageIsLoading;
