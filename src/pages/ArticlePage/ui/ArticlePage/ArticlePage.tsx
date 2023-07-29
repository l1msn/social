import React, {JSX, memo, useCallback} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './ArticlePage.module.scss';
import {ArticleList} from 'entities/Article/model';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader';
import {articlePageReducer, getArticles} from '../../model/slice/articlePageSlice';
import useInitialEffect from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import useAppDispatch from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {useSelector} from 'react-redux';
import getArticlePageError from '../../model/selectors/getArticlePageError/getArticlePageError';
import getArticlePageIsLoading from '../../model/selectors/getArticlePageIsLoading/getArticlePageIsLoading';
import getArticlePageView from '../../model/selectors/getArticlePageView/getArticlePageView';
import PageError from 'widgets/PageError/ui/PageError';
import Page from 'shared/ui/Page';
import initArticlesPage from '../../model/services/initArticlesPage/initArticlesPage';
import fetchNextArticlesPage from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import ArticlePageFilter from 'pages/ArticlePage/ui/ArticlePageFilter/ArticlePageFilter';
import {useSearchParams} from 'react-router-dom';

interface IArticlePageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesPage: articlePageReducer,
};


const ArticlePage: React.FC<IArticlePageProps> = memo(({className}: IArticlePageProps): JSX.Element => {
    const dispatch = useAppDispatch();

    const articles = useSelector(getArticles.selectAll);
    const error = useSelector(getArticlePageError);
    const isLoading = useSelector(getArticlePageIsLoading);
    const view = useSelector(getArticlePageView);

    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });


    const onLoadNextPartPages = useCallback(() => {
        if (__PROJECT__ !== 'storybook' ) {
            dispatch(fetchNextArticlesPage());
        }
    }, [dispatch]);

    if (error) {
        return (
            <PageError/>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterAmount={false}>
            <Page onScrollEnd={onLoadNextPartPages} className={classNames(cls.article, {}, [className])}>
                <ArticlePageFilter/>
                <ArticleList className={cls.list} isLoading={isLoading} view={view} articles={articles}/>
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticlePage;


