import {IStateSchema} from '@/app/providers/StoreProvider';

const getArticlePageSearch = (state: IStateSchema) => state.articlesPage?.search ?? '';

export default getArticlePageSearch;
