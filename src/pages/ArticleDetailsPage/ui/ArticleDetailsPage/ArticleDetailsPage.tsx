import React, { JSX, memo, Suspense } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import { useParams } from 'react-router-dom';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import ArticleDetailsSelectors from '../../model/selectors/ArticleDetailsSelectors';
import PageError from '@/widgets/PageError';
import Page from '@/widgets/Page';
import articleDetailsPageReducer from '../../model/slice/index';
import ArticleDetailsPageHeader from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import { ArticleDetails } from '@/entities/Article';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import { ArticleRating } from '@/features/ArticleRating';
import Loader from '@/shared/ui/deprecated/Loader';
import ArticleDetailsComments from '../ArticleDetailsComments/ArticleDetailsComments';
import { ToggleFeatures } from '@/shared/features';
import { useTranslation } from 'react-i18next';
import { Card as DeprecatedCard } from '@/shared/ui/deprecated/Card';
import { StickyContentLayout } from '@/shared/layouts';
import DetailsContainer from '../DetailsContainer/DetailsContainer';
import AdditionalInfoContainer from '../AdditionalInfoContainer/AdditionalInfoContainer';

interface IArticleDetailsPageProps {
    className?: string;
}
const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: React.FC<IArticleDetailsPageProps> = memo(
    ({ className }: IArticleDetailsPageProps): JSX.Element | null => {
        const { t } = useTranslation();

        const { id } = useParams<string>();

        const errorComments = useSelector(
            ArticleDetailsSelectors.getArticleCommentsError,
        );
        const errorRecommendations = useSelector(
            ArticleDetailsSelectors.getArticleDetailsRecommendationsError,
        );

        if (errorComments || errorRecommendations) {
            return <PageError />;
        }

        if (!id) {
            return null;
        }

        const DeprecatedDynamicModuleLoader = (
            <Page
                className={classNames(cls.articleDetailsPage, {}, [className])}
            >
                <VStack gap={'16'} max>
                    <Suspense fallback={<Loader />}>
                        <ArticleDetailsPageHeader />
                        <ArticleDetails id={id} />
                        <ToggleFeatures
                            feature={'isArticleRatingEnabled'}
                            on={<ArticleRating id={id} />}
                            off={
                                <DeprecatedCard>
                                    {t('Feature coming soon!')}
                                </DeprecatedCard>
                            }
                        />
                        <ArticleRecommendationsList />
                        <ArticleDetailsComments id={id} />
                    </Suspense>
                </VStack>
            </Page>
        );

        const RedesignedDynamicModuleLoader = (
            <StickyContentLayout
                content={
                    <Page
                        className={classNames(cls.articleDetailsPage, {}, [
                            className,
                        ])}
                    >
                        <VStack gap={'16'} max>
                            <Suspense fallback={<Loader />}>
                                <DetailsContainer />
                                <ArticleRating id={id} />
                                <ArticleRecommendationsList />
                                <ArticleDetailsComments id={id} />
                            </Suspense>
                        </VStack>
                    </Page>
                }
                right={<AdditionalInfoContainer />}
            />
        );

        return (
            <DynamicModuleLoader reducers={reducers} removeAfterAmount>
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={RedesignedDynamicModuleLoader}
                    off={DeprecatedDynamicModuleLoader}
                />
            </DynamicModuleLoader>
        );
    },
);

export default ArticleDetailsPage;
