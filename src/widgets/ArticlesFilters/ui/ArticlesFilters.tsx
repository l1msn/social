import React, { JSX, memo } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './ArticlesFilters.module.scss';
import { Card } from '@/shared/ui/redesigned/Card';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { Input } from '@/shared/ui/redesigned/Input';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import { useTranslation } from 'react-i18next';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import SortOrder from '@/shared/types/sort';
import { VStack } from '@/shared/ui/redesigned/Stack';
import SearchIcon from '@/shared/assets/icons/redesigned/search.svg';
import Icon from '@/shared/ui/redesigned/Icon';

interface IArticlesFiltersProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    type: ArticleType;
    search: string;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
    onChangeType: (type: ArticleType) => void;
    onChangeSearch: (value: string) => void;
}

const ArticlesFilters: React.FC<IArticlesFiltersProps> = memo(
    (props: IArticlesFiltersProps): JSX.Element => {
        const {
            onChangeType,
            onChangeSort,
            onChangeSearch,
            onChangeOrder,
            sort,
            type,
            order,
            search,
            className,
        } = props;

        const { t } = useTranslation('article');
        return (
            <Card
                padding={'24'}
                className={classNames(cls.articlesFilters, {}, [className])}
            >
                <VStack max align={'center'} justify={'center'}
gap={'32'}>
                    <Input
                        onChange={onChangeSearch}
                        value={search}
                        placeholder={t('Search')}
                        addonLeft={<Icon Svg={SearchIcon} />}
                    />
                    <ArticleTypeTabs onChangeType={onChangeType} value={type} />
                    <ArticleSortSelector
                        order={order}
                        sort={sort}
                        onChangeOrder={onChangeOrder}
                        onChangeSort={onChangeSort}
                    />
                </VStack>
            </Card>
        );
    },
);

export default ArticlesFilters;
