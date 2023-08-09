import {IStateSchema} from '@/app/providers/StoreProvider';

const getArticlePageLimit = (state: IStateSchema) => state.articlesPage?.limit || 9;

export default getArticlePageLimit;
