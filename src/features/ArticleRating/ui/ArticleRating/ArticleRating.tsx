import React, { JSX, memo, useCallback } from 'react';
import RatingCard from '@/entities/Rating';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { UserSelectors } from '@/entities/User';
import { default as DeprecatedSkeleton } from '@/shared/ui/deprecated/Skeleton';
import {
    useGetArticleRating,
    useRateArticle,
} from '../../api/articleRatingApi';
import { ToggleFeatures } from '@/shared/features';
import Skeleton from '@/shared/ui/redesigned/Skeleton';

interface IArticleRatingProps {
    className?: string;
    id: string;
}

const ArticleRating: React.FC<IArticleRatingProps> = memo(
    ({ className, id }: IArticleRatingProps): JSX.Element => {
        const { t } = useTranslation('rating');

        const userData = useSelector(UserSelectors.getUserAuthData);

        const { data, isLoading } = useGetArticleRating({
            articleId: id,
            userId: userData?.id ?? '',
        });

        const [rateArticleMutation, {}] = useRateArticle();

        const handleRateArticle = useCallback(
            (starsCount: number, feedback?: string) => {
                try {
                    rateArticleMutation({
                        articleId: id,
                        rate: starsCount,
                        feedback: feedback,
                        userId: userData?.id ?? '',
                    });
                } catch (error) {
                    console.log(error);
                }
            },
            [id, rateArticleMutation, userData?.id],
        );

        const onAccept = useCallback(
            (starsCount: number, feedback?: string) => {
                handleRateArticle(starsCount, feedback);
            },
            [handleRateArticle],
        );

        const onCancel = useCallback(
            (starsCount: number) => {
                handleRateArticle(starsCount);
            },
            [handleRateArticle],
        );

        const DeprecatedArticleRatingLoader = (
            <DeprecatedSkeleton width={'100%'} height={'120px'} />
        );

        const RedesignedArticleRatingLoader = (
            <Skeleton width={'100%'} height={'120px'} />
        );

        if (isLoading) {
            return (
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={RedesignedArticleRatingLoader}
                    off={DeprecatedArticleRatingLoader}
                />
            );
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
    },
);

export default ArticleRating;
