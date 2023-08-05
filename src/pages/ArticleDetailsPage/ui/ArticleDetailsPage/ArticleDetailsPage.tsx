import React, {JSX, memo} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import {useParams} from 'react-router-dom';
import NotFoundPage from 'pages/NotFoundPage';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader';
import {useSelector} from 'react-redux';
import getArticleCommentsError
    from '../../model/selectors/getArticleCommentsError/getArticleCommentsError';
import PageError from 'widgets/PageError/ui/PageError';
import Page from 'shared/ui/Page';
import getArticleDetailsRecommendationsError
    from '../../model/selectors/getArticleDetailsRecommendationsError/getArticleDetailsRecommendationsError';
import articleDetailsPageReducer from '../../model/slice/index';
import ArticleDetailsPageHeader from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import {ArticleDetails} from 'entities/Article';
import {VStack} from 'widgets/Stack';
import {ArticleRecommendationsList} from 'features/articleRecommendationsList';
import {ArticleDetailsComments} from 'pages/ArticleDetailsPage';

interface IArticleDetailsPageProps {
    className?: string
}
const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: React.FC<IArticleDetailsPageProps> = memo(({className}: IArticleDetailsPageProps): JSX.Element => {
    const {id} = useParams<string>();

    const errorComments = useSelector(getArticleCommentsError);
    const errorRecommendations = useSelector(getArticleDetailsRecommendationsError);

    if (!id) {
        return (
            <NotFoundPage/>
        );
    }

    if (errorComments || errorRecommendations) {
        return (
            <PageError/>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterAmount>
            <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
                <VStack gap={'16'} max>
                    <ArticleDetailsPageHeader />
                    <ArticleDetails id={id} />
                    <ArticleRecommendationsList />
                    <ArticleDetailsComments id={id}/>
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticleDetailsPage;


