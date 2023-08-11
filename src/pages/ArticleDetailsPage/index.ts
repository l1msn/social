import articleDetailsPageReducer from './model/slice';
import IArticleDetailsPageSchema from './model/types';
import ArticleDetailsComments from './ui/ArticleDetailsComments/ArticleDetailsComments';
import ArticleDetailsPageLazy from './ui/ArticleDetailsPage/ArticleDetailsPage.lazy';

export {ArticleDetailsPageLazy as ArticleDetailsPage};
export type {IArticleDetailsPageSchema};
export {articleDetailsPageReducer, ArticleDetailsComments};
