import {EntityState} from '@reduxjs/toolkit';
import {ArticleSortField, ArticleType, ArticleView, IArticle} from '@/entities/Article';
import SortOrder from '@/shared/types';

interface IArticlePageSchema extends EntityState<IArticle>{
    isLoading?: boolean,
    error?: string,

    view: ArticleView,
    page: number,
    limit: number,
    hasMore: boolean,

    init: boolean;

    order: SortOrder,
    sort: ArticleSortField,
    search: string,

    type: ArticleType;
}

export default IArticlePageSchema;
