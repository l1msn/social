import { combineReducers } from '@reduxjs/toolkit';
import IArticleDetailsPageSchema from '../types/index';
import { articleDetailsRecommendationsReducer } from '../../model/slice/articleDetailsRecommendationsSlice';
import { articleDetailsCommentsReducer } from '../../model/slice/articleDetailsCommentsSlice';

const articleDetailsPageReducer = combineReducers<IArticleDetailsPageSchema>({
    recommendations: articleDetailsRecommendationsReducer,
    comments: articleDetailsCommentsReducer,
});

export default articleDetailsPageReducer;
