import React, {JSX, memo, useCallback} from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './ArticlePage.module.scss';
import {DynamicModuleLoader, ReducersList} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {articlePageReducer} from '../../model/slice/articlePageSlice';
import useInitialEffect from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import useAppDispatch from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import Page from '@/widgets/Page';
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


