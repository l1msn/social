import React, { JSX, memo, useCallback } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articlesPageReducer } from '../../model/slice/articlesPageSlice';
import useInitialEffect from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import useAppDispatch from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import Page from '@/widgets/Page';
import initArticlesPage from '../../model/services/initArticlesPage/initArticlesPage';
import fetchNextArticlesPage from '../../model/services/fetchNextArticlesPage/fetchNextArticlesPage';
import ArticlesPageFilter from '../ArticlesPageFilter/ArticlesPageFilter';
import { useSearchParams } from 'react-router-dom';
import ArticlesInfiniteList from '../ArticlesInfiniteList/ArticlesInfiniteList';
import { ArticlePageGreeting } from '@/features/articlePageGreeting';

interface IArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage: React.FC<IArticlesPageProps> = memo(
    ({ className }: IArticlesPageProps): JSX.Element => {
        const dispatch = useAppDispatch();

        const [searchParams] = useSearchParams();

        useInitialEffect(() => {
            dispatch(initArticlesPage(searchParams));
        });

        const onLoadNextPartPages = useCallback(() => {
            if (__PROJECT__ !== 'storybook') {
                dispatch(fetchNextArticlesPage());
            }
        }, [dispatch]);

        return (
            <DynamicModuleLoader reducers={reducers} removeAfterAmount={false}>
                <Page
                    data-testid={'ArticlesPage'}
                    onScrollEnd={onLoadNextPartPages}
                    className={classNames(cls.articlesPage, {}, [className])}
                >
                    <ArticlesPageFilter />
                    <ArticlesInfiniteList className={cls.list} />
                    <ArticlePageGreeting />
                </Page>
            </DynamicModuleLoader>
        );
    },
);

export default ArticlesPage;
