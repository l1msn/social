import getArticleData from './selectors/getArticleData/getArticleData';
import getArticleError from './selectors/getArticleError/getArticleError';
import getArticleIsLoading from './selectors/getArticleIsLoading/getArticleIsLoading';
import {IArticle} from './types/IArticle';
import IArticleSchema from './types/IArticleSchema';
import ArticleDetails from './ui/ArticleDetails/ArticleDetails';

export {ArticleDetails, IArticleSchema, getArticleData, getArticleIsLoading, getArticleError};
export type {IArticle};
