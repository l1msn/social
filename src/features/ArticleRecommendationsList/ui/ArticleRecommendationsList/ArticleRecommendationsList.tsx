import classNames from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import React, { JSX, memo } from 'react';
import { SizeText, Text } from '@/shared/ui/deprecated/Text';
import { ArticleList, ArticleView } from '@/entities/Article';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import useArticleRecommendationsList from '../../api/articleRecommendationsApi';
import Skeleton from '@/shared/ui/deprecated/Skeleton';
import cls from './ArticleRecommendationsList.module.scss';

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

        if (isLoading) {
            return (
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
        }

        if (!data) {
            return null;
        }

        return (
            <VStack
                data-testid={'ArticleRecommendationsList'}
                gap={'8'}
                className={classNames('', {}, [className])}
            >
                <Text size={SizeText.L} title={t('Recommendations')} />
                <ArticleList
                    target={'_blank'}
                    view={ArticleView.SHELF}
                    articles={data}
                />
            </VStack>
        );
    });

export default ArticleRecommendationsList;
