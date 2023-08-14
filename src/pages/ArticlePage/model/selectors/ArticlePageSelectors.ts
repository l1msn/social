import {IStateSchema} from '@/app/providers/StoreProvider';
import {ArticleSortField, ArticleType, ArticleView} from '@/entities/Article';

class ArticlePageSelectors {
    static getArticlePageError = (state: IStateSchema) => state.articlesPage?.error;
    static getArticlePageHasMore = (state: IStateSchema) => state.articlesPage?.hasMore;
    static getArticlePageInit = (state: IStateSchema) => state.articlesPage?.init;
    static getArticlePageIsLoading = (state: IStateSchema) => state.articlesPage?.isLoading || false;
    static getArticlePageLimit = (state: IStateSchema) => state.articlesPage?.limit || 9;
    static getArticlePageNumber = (state: IStateSchema) => state.articlesPage?.page || 1;
    static getArticlePageOrder = (state: IStateSchema) => state.articlesPage?.order ?? 'asc';
    static getArticlePageSearch = (state: IStateSchema) => state.articlesPage?.search ?? '';
    static getArticlePageSort = (state: IStateSchema) => state.articlesPage?.sort ?? ArticleSortField.CREATED;
    static getArticlePageType = (state: IStateSchema) => state.articlesPage?.type ?? ArticleType.ALL;
    static getArticlePageView = (state: IStateSchema) => state.articlesPage?.view || ArticleView.SHELF;
}

export default ArticlePageSelectors;
