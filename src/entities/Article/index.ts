import ArticleSelectors from './model/selectors/ArticleSelectors';
import { articleReducer } from './model/slice/articleSlice';
import ArticleView from './model/types/ArticleView';
import {
    ArticleBlockType,
    ArticleSortField,
    ArticleType,
    IArticle,
} from './model/types/IArticle';
import IArticleSchema from './model/types/IArticleSchema';
import ArticleDetails from './ui/ArticleDetails/ArticleDetails';
import ArticleList from './ui/ArticleList/ArticleList';

export {
    ArticleDetails,
    ArticleBlockType,
    ArticleSelectors,
    ArticleView,
    ArticleList,
    ArticleSortField,
    ArticleType,
    articleReducer,
};

export type { IArticleSchema, IArticle };
