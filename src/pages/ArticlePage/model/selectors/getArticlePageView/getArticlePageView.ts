import {IStateSchema} from 'app/providers/StoreProvider';
import {ArticleView} from 'entities/Article/model';

const getArticlePageView = (state: IStateSchema) => state.articlesPage?.view || ArticleView.SHELF;

export default getArticlePageView;
