import React, {JSX, memo, useCallback} from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import {
    ArticleSortField,
    ArticleView,
    ArticleType,
} from '@/entities/Article';
import {useSelector} from 'react-redux';
import {articlePageActions} from '../../model/slice/articlePageSlice';
import useAppDispatch from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {useTranslation} from 'react-i18next';
import cls from './ArticlePageFilter.module.scss';
import {Card} from '@/shared/ui/Card';
import {Input} from '@/shared/ui/Input';
import SortOrder from '@/shared/types';
import fetchArticlesList from '../../model/services/fetchArticlesList/fetchArticlesList';
import useDebounce from '@/shared/lib/hooks/useDebounce/useDebounce';
import Button from '@/shared/ui/Button';
import ThemeButton from '@/shared/ui/Button/consts/ThemeButton';
import ArticlePageSelectors from '../../model/selectors/ArticlePageSelectors';
import {ArticleSortSelector} from '@/features/ArticleSortSelector';
import {ArticleViewSelector} from '@/features/ArticleViewSelector';
import {ArticleTypeTabs} from '@/features/ArticleTypeTabs';


interface IArticlePageFilterProps {
    className?: string
}

const ArticlePageFilter: React.FC<IArticlePageFilterProps> = memo(({className}: IArticlePageFilterProps): JSX.Element => {
    const dispatch = useAppDispatch();

    const {t} = useTranslation('article');

    const view = useSelector(ArticlePageSelectors.getArticlePageView);
    const order = useSelector(ArticlePageSelectors.getArticlePageOrder);
    const sort = useSelector(ArticlePageSelectors.getArticlePageSort);
    const search = useSelector(ArticlePageSelectors.getArticlePageSearch);
    const type = useSelector(ArticlePageSelectors.getArticlePageType);

    const fetchData = useCallback(() => {
        dispatch(fetchArticlesList({replace: true}));
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setView(view));
    }, [dispatch]);

    const onChangeSort = useCallback((newSort: ArticleSortField) => {
        dispatch(articlePageActions.setSort(newSort));
        dispatch(articlePageActions.setPage(1));
        debouncedFetchData();
    }, [debouncedFetchData, dispatch]);

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlePageActions.setOrder(newOrder));
        dispatch(articlePageActions.setPage(1));
        debouncedFetchData();
    }, [debouncedFetchData, dispatch]);

    const onChangeSearch = useCallback((search: string) => {
        dispatch(articlePageActions.setSearch(search));
        dispatch(articlePageActions.setPage(1));
        debouncedFetchData();
    }, [debouncedFetchData, dispatch]);

    const onClearSearch = useCallback(() => {
        dispatch(articlePageActions.setSearch(''));
        dispatch(articlePageActions.setPage(1));
        debouncedFetchData();
    }, [debouncedFetchData, dispatch]);

    const onChangeType = useCallback((value: ArticleType) => {
        dispatch(articlePageActions.setType(value));
        dispatch(articlePageActions.setPage(1));
        fetchData();
    }, [dispatch, fetchData]);

    return (
        <div className={classNames('', {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSelector
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSelector onViewClick={onChangeView} view={view}/>
            </div>
            <Card className={cls.search}>
                <Input onChange={onChangeSearch} value={search} placeholder={t('Search')}/>
                {search && <Button className={cls.clearBtn} onClick={onClearSearch} theme={ThemeButton.CLEAR}>x</Button>}
            </Card>
            <ArticleTypeTabs
                className={cls.tabs}
                onChangeType={onChangeType}
                value={type}
            />
        </div>
    );
});

export default ArticlePageFilter;


