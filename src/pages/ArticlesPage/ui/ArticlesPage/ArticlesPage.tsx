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
import { ArticlePageGreeting } from '@/features/ArticlePageGreeting';
import { ToggleFeatures } from '@/shared/features';
import { StickyContentLayout } from '@/shared/layouts';
import ViewSelectorContainer from '../ViewSelectorContainer/ViewSelectorContainer';
import FiltersContainer from '../FiltersContainer/FiltersContainer';

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

        const DeprecatedArticlesPage = (
            <Page
                data-testid={'ArticlesPage'}
                onScrollEnd={onLoadNextPartPages}
                className={classNames(cls.articlesPage, {}, [className])}
            >
                <ArticlesPageFilter />
                <ArticlesInfiniteList className={cls.list} />
                <ArticlePageGreeting />
            </Page>
        );

        const RedesignedArticlesPage = (
            <StickyContentLayout
                left={<ViewSelectorContainer />}
                right={<FiltersContainer />}
                content={
                    <Page
                        data-testid={'ArticlesPage'}
                        onScrollEnd={onLoadNextPartPages}
                        className={classNames(cls.articlesPageRedesigned, {}, [
                            className,
                        ])}
                    >
                        <ArticlesInfiniteList className={cls.list} />
                        <ArticlePageGreeting />
                    </Page>
                }
            />
        );

        return (
            <DynamicModuleLoader reducers={reducers} removeAfterAmount={false}>
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={RedesignedArticlesPage}
                    off={DeprecatedArticlesPage}
                />
            </DynamicModuleLoader>
        );
    },
);

export default ArticlesPage;
