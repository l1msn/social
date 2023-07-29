import {IStateSchema} from 'app/providers/StoreProvider';
import {ArticleType} from 'entities/Article/model';

const getArticlePageType = (state: IStateSchema) => state.articlesPage?.type ?? ArticleType.ALL;

export default getArticlePageType;
