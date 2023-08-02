import {combineReducers} from '@reduxjs/toolkit';
import {IArticleDetailsPageSchema} from 'pages/ArticleDetailsPage';
import {
    articleDetailsRecommendationsReducer,
} from 'pages/ArticleDetailsPage/model/slice/articleDetailsRecommendationsSlice';
import {articleDetailsCommentsReducer} from 'pages/ArticleDetailsPage/model/slice/articleDetailsCommentsSlice';

const articleDetailsPageReducer = combineReducers<IArticleDetailsPageSchema>({
    recommendations: articleDetailsRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
});

export default articleDetailsPageReducer;
