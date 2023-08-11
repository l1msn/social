import getArticleData from './model/selectors/getArticleData/getArticleData';
import getArticleError from './model/selectors/getArticleError/getArticleError';
import getArticleIsLoading from './model/selectors/getArticleIsLoading/getArticleIsLoading';
import {articleReducer} from './model/slice/articleSlice';
import ArticleView from './model/types/ArticleView';
import {ArticleBlockType, ArticleSortField, ArticleType, IArticle} from './model/types/IArticle';
import IArticleSchema from './model/types/IArticleSchema';
import ArticleDetails from './ui/ArticleDetails/ArticleDetails';
import ArticleList from './ui/ArticleList/ArticleList';
import ArticleSortSelector from './ui/ArticleSortSelector/ArticleSortSelector';
import ArticleTypeTabs from './ui/ArticleTypeTabs/ArticleTypeTabs';
import ArticleViewSelector from './ui/ArticleViewSelector/ArticleViewSelector';

export {ArticleDetails, ArticleBlockType,
    getArticleData, getArticleIsLoading,
    getArticleError, ArticleView,
    ArticleViewSelector, ArticleList,
    ArticleSortField, ArticleSortSelector,
    ArticleType, ArticleTypeTabs,
    articleReducer,
};

export type {IArticleSchema, IArticle};
