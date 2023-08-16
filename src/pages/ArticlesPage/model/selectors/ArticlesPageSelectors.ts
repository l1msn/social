import {IStateSchema} from '@/app/providers/StoreProvider';
import {ArticleSortField, ArticleType, ArticleView} from '@/entities/Article';

class ArticlesPageSelectors {
    static getArticlesPageError = (state: IStateSchema) => state.articlesPage?.error;
    static getArticlesPageHasMore = (state: IStateSchema) => state.articlesPage?.hasMore;
    static getArticlesPageInit = (state: IStateSchema) => state.articlesPage?.init;
    static getArticlesPageIsLoading = (state: IStateSchema) => state.articlesPage?.isLoading || false;
    static getArticlesPageLimit = (state: IStateSchema) => state.articlesPage?.limit || 9;
    static getArticlesPageNumber = (state: IStateSchema) => state.articlesPage?.page || 1;
    static getArticlesPageOrder = (state: IStateSchema) => state.articlesPage?.order ?? 'asc';
    static getArticlesPageSearch = (state: IStateSchema) => state.articlesPage?.search ?? '';
    static getArticlesPageSort = (state: IStateSchema) => state.articlesPage?.sort ?? ArticleSortField.CREATED;
    static getArticlesPageType = (state: IStateSchema) => state.articlesPage?.type ?? ArticleType.ALL;
    static getArticlesPageView = (state: IStateSchema) => state.articlesPage?.view || ArticleView.SHELF;
}

export default ArticlesPageSelectors;
