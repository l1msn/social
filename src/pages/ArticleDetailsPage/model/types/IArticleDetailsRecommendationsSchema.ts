import {EntityState} from '@reduxjs/toolkit';
import {IArticle} from '@/entities/Article';

interface IArticleDetailsRecommendationsSchema extends EntityState<IArticle>{
    isLoading?: boolean,
    error?: string,
}

export default IArticleDetailsRecommendationsSchema;
