import React, {JSX, useMemo} from 'react';
import cls from './ArticleSortSelector.module.scss';
import classNames from 'shared/lib/classNames/classNames';
import {ISelectOptions, Select} from 'shared/ui/Select';
import {useTranslation} from 'react-i18next';
import {ArticleSortField} from 'entities/Article/model/types/IArticle';
import SortOrder from 'shared/types';

interface IArticleSortSelectorProps {
    className?: string,
    sort: ArticleSortField,
    order: SortOrder,
    onChangeOrder: (newOrder: SortOrder) => void,
    onChangeSort: (newSort: ArticleSortField) => void,
}

const ArticleSortSelector: React.FC<IArticleSortSelectorProps> = (props: IArticleSortSelectorProps): JSX.Element => {
    const {onChangeSort, onChangeOrder, sort, order, className} = props;

    const {t} = useTranslation('article');

    const orderOptions = useMemo<ISelectOptions<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('ascending'),
        },
        {
            value: 'desc',
            content: t('descending'),
        },
    ], [t]);

    const sortFieldOptions = useMemo<ISelectOptions<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('date'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('title'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('views'),
        },
    ], [t]);

    return (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <Select<ArticleSortField>
                options={sortFieldOptions}
                label={t('Sort')}
                value={sort}
                onChange={onChangeSort}
                className={cls.order}
            />
            <Select<SortOrder>
                options={orderOptions}
                label={t('by')}
                value={order}
                onChange={onChangeOrder}
                className={cls.order}
            />
        </div>
    );
};

export default ArticleSortSelector;


