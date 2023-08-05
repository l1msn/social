import React, {JSX, memo, useCallback} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './ArticlePage.module.scss';
import {ArticleList} from 'entities/Article';
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
import ArticlePageFilter from '../ArticlePageFilter/ArticlePageFilter';
import {useSearchParams} from 'react-router-dom';
import ArticleInfiniteList from '../../ui/ArticleInfiniteList/ArticleInfiniteList';

interface IArticlePageProps {
    className?: string
}

const reducers: ReducersList = {
    articlesPage: articlePageReducer,
};


const ArticlePage: React.FC<IArticlePageProps> = memo(({className}: IArticlePageProps): JSX.Element => {
    const dispatch = useAppDispatch();

    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    });

    const onLoadNextPartPages = useCallback(() => {
        if (__PROJECT__ !== 'storybook' ) {
            dispatch(fetchNextArticlesPage());
        }
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterAmount={false}>
            <Page onScrollEnd={onLoadNextPartPages} className={classNames(cls.articlePage, {}, [className])}>
                <ArticlePageFilter/>
                <ArticleInfiniteList className={cls.list}/>
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticlePage;


