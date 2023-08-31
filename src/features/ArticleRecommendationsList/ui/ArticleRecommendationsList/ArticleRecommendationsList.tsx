import classNames from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { JSX, memo } from 'react';
import { SizeText, Text as DeprecatedText } from '@/shared/ui/deprecated/Text';
import { ArticleList, ArticleView } from '@/entities/Article';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import useArticleRecommendationsList from '../../api/articleRecommendationsApi';
import { default as DeprecatedSkeleton } from '@/shared/ui/deprecated/Skeleton';
import cls from './ArticleRecommendationsList.module.scss';
import { ToggleFeatures } from '@/shared/features';
import { Text } from '@/shared/ui/redesigned/Text';
import Skeleton from '@/shared/ui/redesigned/Skeleton';

interface IArticleRecommendationsListProps {
    className?: string;
}

const ArticleRecommendationsList: React.FC<IArticleRecommendationsListProps> =
    memo((props: IArticleRecommendationsListProps): JSX.Element | null => {
        const { className } = props;
        const { t } = useTranslation();
        const { data, isLoading, error } = useArticleRecommendationsList(4);

        if (error || !data) {
            return null;
        }

        const DeprecatedArticleRecommendationsListLoader = (
            <HStack
                max
                gap={'16'}
                className={classNames(cls.recommend, {}, [className])}
            >
                <DeprecatedSkeleton height={300} width={230} />
                <DeprecatedSkeleton height={300} width={230} />
                <DeprecatedSkeleton height={300} width={230} />
                <DeprecatedSkeleton height={300} width={230} />
            </HStack>
        );

        const RedesignedArticleRecommendationsListLoader = (
            <HStack
                max
                gap={'16'}
                className={classNames(cls.recommend, {}, [className])}
            >
                <Skeleton height={300} width={230} />
                <Skeleton height={300} width={230} />
                <Skeleton height={300} width={230} />
                <Skeleton height={300} width={230} />
            </HStack>
        );

        if (isLoading) {
            return (
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={RedesignedArticleRecommendationsListLoader}
                    off={DeprecatedArticleRecommendationsListLoader}
                />
            );
        }

        if (!data) {
            return null;
        }

        const DeprecatedArticleRecommendationsList = (
            <VStack
                data-testid={'ArticleRecommendationsList'}
                gap={'8'}
                className={classNames('', {}, [className])}
            >
                <DeprecatedText
                    size={SizeText.L}
                    title={t('Recommendations')}
                />
                <ArticleList
                    target={'_blank'}
                    view={ArticleView.SHELF}
                    articles={data}
                />
            </VStack>
        );

        const RedesignedArticleRecommendationsList = (
            <VStack
                data-testid={'ArticleRecommendationsList'}
                gap={'8'}
                className={classNames('', {}, [className])}
            >
                <Text size={'l'} title={t('Recommendations')} />
                <ArticleList
                    target={'_blank'}
                    view={ArticleView.SHELF}
                    articles={data}
                />
            </VStack>
        );

        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={RedesignedArticleRecommendationsList}
                off={DeprecatedArticleRecommendationsList}
            />
        );
    });

export default ArticleRecommendationsList;
