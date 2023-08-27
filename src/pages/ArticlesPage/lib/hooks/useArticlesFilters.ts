import { useCallback } from 'react';
import { ArticleSortField, ArticleType, ArticleView } from '@/entities/Article';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';
import SortOrder from '@/shared/types/sort';
import { useSelector } from 'react-redux';
import ArticlesPageSelectors from '../../model/selectors/ArticlesPageSelectors';
import useAppDispatch from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import fetchArticlesList from '../../model/services/fetchArticlesList/fetchArticlesList';
import useDebounce from '@/shared/lib/hooks/useDebounce/useDebounce';

function useArticlesFilters() {
    const dispatch = useAppDispatch();

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({ replace: true }));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const view = useSelector(ArticlesPageSelectors.getArticlesPageView);
    const order = useSelector(ArticlesPageSelectors.getArticlesPageOrder);
    const sort = useSelector(ArticlesPageSelectors.getArticlesPageSort);
    const search = useSelector(ArticlesPageSelectors.getArticlesPageSearch);
    const type = useSelector(ArticlesPageSelectors.getArticlesPageType);

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

    return {
        view,
        order,
        sort,
        search,
        type,
        onChangeView,
        onChangeSort,
        onChangeOrder,
        onChangeSearch,
        onClearSearch,
        onChangeType,
    };
}

export default useArticlesFilters;
