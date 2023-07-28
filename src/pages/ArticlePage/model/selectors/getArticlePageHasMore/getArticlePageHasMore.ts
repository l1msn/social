import {IStateSchema} from 'app/providers/StoreProvider';

const getArticlePageHasMore = (state: IStateSchema) => state.articlesPage?.hasMore;

export default getArticlePageHasMore;
