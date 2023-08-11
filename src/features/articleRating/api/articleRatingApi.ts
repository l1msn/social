import rtkApi from '@/shared/api/rtkApi';
import {IArticleRating} from '@/features/articleRating';

interface IGetArticleRatingProps {
    userId: string | number,
    articleId: string;
}

interface IRateArticleRatingProps extends IGetArticleRatingProps{
    rate: number,
    feedback?: string;
}

const articleRatingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<IArticleRating[], IGetArticleRatingProps>({
            query: ({articleId, userId}) => ({
                url: '/article-ratings',
                params: {
                    userId,
                    articleId,
                },
            }),
        }),
        rateArticleRating: build.mutation<void, IRateArticleRatingProps>({
            query: (arg) => ({
                url: '/article-ratings',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery;
const useRateArticle = articleRatingApi.useRateArticleRatingMutation;

export {useGetArticleRating, useRateArticle};
