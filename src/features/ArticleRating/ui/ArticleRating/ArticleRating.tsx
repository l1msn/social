import React, {JSX, memo, useCallback} from 'react';
import RatingCard from '@/entities/Rating';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {UserSelectors} from '@/entities/User';
import Skeleton from '@/shared/ui/Skeleton';
import {useGetArticleRating, useRateArticle} from '../../api/articleRatingApi';


interface IArticleRatingProps {
    className?: string,
    articleId: string;
}

const ArticleRating: React.FC<IArticleRatingProps> = memo(({className, articleId}: IArticleRatingProps): JSX.Element => {
    const {t} = useTranslation('rating');

    const userData = useSelector(UserSelectors.getUserAuthData);

    const {data, isLoading} = useGetArticleRating({
        articleId,
        userId: userData?.id ?? '',
    });

    const [rateArticleMutation, {}] = useRateArticle();

    const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                articleId: articleId,
                rate: starsCount,
                feedback: feedback,
                userId: userData?.id ?? '',
            });
        } catch (e) {
            console.log(e);
        }
    }, [articleId, rateArticleMutation, userData?.id]);

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateArticle(starsCount, feedback);
    }, [handleRateArticle]);

    const onCancel = useCallback((starsCount: number) => {
        handleRateArticle(starsCount);
    }, [handleRateArticle]);

    if (isLoading) {
        return <Skeleton width={'100%'} height={'120px'}/>;
    }

    const rating = data?.[0];

    return (
        <RatingCard
            onAccept={onAccept}
            onCancel={onCancel}
            rate={rating?.rate}
            className={className}
            title={t('Rate article')}
            feedbackTitle={t('Leave your comment')}
            hasFeedback
        />
    );
});

export default ArticleRating;


