import {articlePageReducer} from './model/slice/articlePageSlice';
import IArticlePageSchema from './model/types/IArticlePageSchema';
import ArticlePageLazy from './ui/ArticlePage/ArticlePage.lazy';

export {ArticlePageLazy as ArticlePage};
export type {IArticlePageSchema};
export {articlePageReducer};
