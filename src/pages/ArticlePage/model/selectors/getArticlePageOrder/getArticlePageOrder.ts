import {IStateSchema} from '@/app/providers/StoreProvider';

const getArticlePageOrder = (state: IStateSchema) => state.articlesPage?.order ?? 'asc';

export default getArticlePageOrder;
