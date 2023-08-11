import React, {JSX, memo, Suspense} from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import {useParams} from 'react-router-dom';
import {DynamicModuleLoader, ReducersList} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {useSelector} from 'react-redux';
import getArticleCommentsError
    from '../../model/selectors/getArticleCommentsError/getArticleCommentsError';
import PageError from '@/widgets/PageError';
import Page from '@/shared/ui/Page';
import getArticleDetailsRecommendationsError
    from '../../model/selectors/getArticleDetailsRecommendationsError/getArticleDetailsRecommendationsError';
import articleDetailsPageReducer from '../../model/slice/index';
import ArticleDetailsPageHeader from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import {ArticleDetails} from '@/entities/Article';
import {VStack} from '@/widgets/Stack';
import {ArticleRecommendationsList} from '@/features/articleRecommendationsList';
import {ArticleDetailsComments} from '@/pages/ArticleDetailsPage';
import {ArticleRating} from '@/features/articleRating';
import Loader from '@/widgets/Loader';

interface IArticleDetailsPageProps {
    className?: string
}
const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: React.FC<IArticleDetailsPageProps> = memo(({className}: IArticleDetailsPageProps): JSX.Element | null => {
    const {id} = useParams<string>();

    const errorComments = useSelector(getArticleCommentsError);
    const errorRecommendations = useSelector(getArticleDetailsRecommendationsError);


    if (errorComments || errorRecommendations) {
        return (
            <PageError/>
        );
    }

    if (!id) {
        return null;
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterAmount>
            <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
                <VStack gap={'16'} max>
                    <Suspense fallback={<Loader/>}>
                        <ArticleDetailsPageHeader />
                        <ArticleDetails id={id} />
                        <ArticleRating articleId={id}/>
                        <ArticleRecommendationsList />
                        <ArticleDetailsComments id={id}/>
                    </Suspense>
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticleDetailsPage;


