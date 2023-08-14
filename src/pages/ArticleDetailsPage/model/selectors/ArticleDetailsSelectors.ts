import {IStateSchema} from '@/app/providers/StoreProvider';
import {createSelector} from '@reduxjs/toolkit';
import {ArticleSelectors} from '@/entities/Article';
import {UserSelectors} from '@/entities/User';

class ArticleDetailsSelectors {
    static getArticleCommentsError = (state: IStateSchema) => state?.articleDetailsPage?.comments?.error || '';
    static getArticleCommentsIsLoading = (state: IStateSchema) => state?.articleDetailsPage?.comments?.isLoading || false;
    static getArticleDetailsRecommendationsError = (state: IStateSchema) => state?.articleDetailsPage?.recommendations?.error || '';
    static getArticleDetailsRecommendationsIsLoading = (state: IStateSchema) => state?.articleDetailsPage?.recommendations?.isLoading || false;
    static getCanEditArticle = createSelector(ArticleSelectors.getArticleData, UserSelectors.getUserAuthData,
        (article, user) => {
            if (!article || !user) {
                return false;
            }

            return article.user.id === user.id;
        },
    );
}

export default ArticleDetailsSelectors;
