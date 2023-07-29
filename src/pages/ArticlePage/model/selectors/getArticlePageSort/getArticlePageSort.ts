import {IStateSchema} from 'app/providers/StoreProvider';
import {ArticleSortField} from 'entities/Article/model';

const getArticlePageSort = (state: IStateSchema) => state.articlesPage?.sort ?? ArticleSortField.CREATED;

export default getArticlePageSort;
