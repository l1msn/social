import {EntityState} from '@reduxjs/toolkit';
import {ArticleView, IArticle} from 'entities/Article/model';

interface IArticlePageSchema extends EntityState<IArticle>{
    isLoading?: boolean,
    error?: string,
    view: ArticleView,
    page: number,
    limit?: number,
    hasMore: boolean;
}

export default IArticlePageSchema;
