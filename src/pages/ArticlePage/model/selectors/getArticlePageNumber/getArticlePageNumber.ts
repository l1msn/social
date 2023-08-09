import {IStateSchema} from '@/app/providers/StoreProvider';

const getArticlePageNumber = (state: IStateSchema) => state.articlesPage?.page || 1;

export default getArticlePageNumber;
