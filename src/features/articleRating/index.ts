import {useGetArticleRating, useRateArticle} from './api/articleRatingApi';
import IArticleRating from './model/types/IArticleRating';
import ArticleRatingLazy from './ui/ArticleRating/ArticleRating.lazy';

export {ArticleRatingLazy as ArticleRating};
export type {IArticleRating};
export {useGetArticleRating, useRateArticle};
