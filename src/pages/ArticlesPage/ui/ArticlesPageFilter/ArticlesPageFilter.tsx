import React, { JSX, memo, useCallback } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import { ArticleSortField, ArticleView, ArticleType } from '@/entities/Article';
import { useSelector } from 'react-redux';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';
import useAppDispatch from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesPageFilter.module.scss';
import { Card } from '@/shared/ui/Card';
import { Input } from '@/shared/ui/Input';
import SortOrder from '@/shared/types/sort';
import fetchArticlesList from '../../model/services/fetchArticlesList/fetchArticlesList';
import useDebounce from '@/shared/lib/hooks/useDebounce/useDebounce';
import Button from '@/shared/ui/Button';
import ThemeButton from '@/shared/ui/Button/consts/ThemeButton';
import ArticlesPageSelectors from '../../model/selectors/ArticlesPageSelectors';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';

interface IArticlesPageFilterProps {
    className?: string;
}

const ArticlesPageFilter: React.FC<IArticlesPageFilterProps> = memo(
    ({ className }: IArticlesPageFilterProps): JSX.Element => {
        const dispatch = useAppDispatch();

        const { t } = useTranslation('article');

        const view = useSelector(ArticlesPageSelectors.getArticlesPageView);
        const order = useSelector(ArticlesPageSelectors.getArticlesPageOrder);
        const sort = useSelector(ArticlesPageSelectors.getArticlesPageSort);
        const search = useSelector(ArticlesPageSelectors.getArticlesPageSearch);
        const type = useSelector(ArticlesPageSelectors.getArticlesPageType);

        const fetchData = useCallback(() => {
            dispatch(fetchArticlesList({ replace: true }));
        }, [dispatch]);

        const debouncedFetchData = useDebounce(fetchData, 500);

        const onChangeView = useCallback(
            (view: ArticleView) => {
                dispatch(articlesPageActions.setView(view));
            },
            [dispatch],
        );

        const onChangeSort = useCallback(
            (newSort: ArticleSortField) => {
                dispatch(articlesPageActions.setSort(newSort));
                dispatch(articlesPageActions.setPage(1));
                debouncedFetchData();
            },
            [debouncedFetchData, dispatch],
        );

        const onChangeOrder = useCallback(
            (newOrder: SortOrder) => {
                dispatch(articlesPageActions.setOrder(newOrder));
                dispatch(articlesPageActions.setPage(1));
                debouncedFetchData();
            },
            [debouncedFetchData, dispatch],
        );

        const onChangeSearch = useCallback(
            (search: string) => {
                dispatch(articlesPageActions.setSearch(search));
                dispatch(articlesPageActions.setPage(1));
                debouncedFetchData();
            },
            [debouncedFetchData, dispatch],
        );

        const onClearSearch = useCallback(() => {
            dispatch(articlesPageActions.setSearch(''));
            dispatch(articlesPageActions.setPage(1));
            debouncedFetchData();
        }, [debouncedFetchData, dispatch]);

        const onChangeType = useCallback(
            (value: ArticleType) => {
                dispatch(articlesPageActions.setType(value));
                dispatch(articlesPageActions.setPage(1));
                fetchData();
            },
            [dispatch, fetchData],
        );

        return (
            <div className={classNames('', {}, [className])}>
                <div className={cls.sortWrapper}>
                    <ArticleSortSelector
                        order={order}
                        sort={sort}
                        onChangeOrder={onChangeOrder}
                        onChangeSort={onChangeSort}
                    />
                    <ArticleViewSelector
                        onViewClick={onChangeView}
                        view={view}
                    />
                </div>
                <Card className={cls.search}>
                    <Input
                        onChange={onChangeSearch}
                        value={search}
                        placeholder={t('Search')}
                    />
                    {search && (
                        <Button
                            className={cls.clearBtn}
                            onClick={onClearSearch}
                            theme={ThemeButton.CLEAR}
                        >
                            x
                        </Button>
                    )}
                </Card>
                <ArticleTypeTabs
                    className={cls.tabs}
                    onChangeType={onChangeType}
                    value={type}
                />
            </div>
        );
    },
);

export default ArticlesPageFilter;
