import React, { JSX, useMemo } from 'react';
import cls from './ArticleSortSelector.module.scss';
import classNames from '@/shared/lib/classNames/classNames';
import {
    ISelectOptions,
    Select as DeprecatedSelect,
} from '@/shared/ui/deprecated/Select';
import { useTranslation } from 'react-i18next';
import SortOrder from '@/shared/types/sort';
import { ArticleSortField } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/features';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';

interface IArticleSortSelectorProps {
    className?: string;
    sort: ArticleSortField;
    order: SortOrder;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

const ArticleSortSelector: React.FC<IArticleSortSelectorProps> = (
    props: IArticleSortSelectorProps,
): JSX.Element => {
    const { onChangeSort, onChangeOrder, sort, order, className } = props;

    const { t } = useTranslation('article');

    const orderOptions = useMemo<ISelectOptions<SortOrder>[]>(
        () => [
            {
                value: 'asc',
                content: t('ascending'),
            },
            {
                value: 'desc',
                content: t('descending'),
            },
        ],
        [t],
    );

    const sortFieldOptions = useMemo<ISelectOptions<ArticleSortField>[]>(
        () => [
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
        ],
        [t],
    );

    const DeprecatedArticleSortSelector = (
        <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
            <DeprecatedSelect<ArticleSortField>
                options={sortFieldOptions}
                label={t('Sort')}
                value={sort}
                onChange={onChangeSort}
                className={cls.order}
            />
            <DeprecatedSelect<SortOrder>
                options={orderOptions}
                label={t('by')}
                value={order}
                onChange={onChangeOrder}
                className={cls.order}
            />
        </div>
    );
    const RedesignedArticleSortSelector = (
        <div
            className={classNames(cls.ArticleSortSelectorRedesigned, {}, [
                className,
            ])}
        >
            <Text align={'center'} className={cls.label} text={t('Sort by')} />
            <HStack justify={'center'} gap={'8'}>
                <ListBox
                    items={sortFieldOptions}
                    value={sort}
                    onChange={onChangeSort}
                    direction={'bottom right'}
                />
                <Text text={'|'} />
                <ListBox
                    items={orderOptions}
                    value={order}
                    onChange={onChangeOrder}
                    direction={'bottom left'}
                />
            </HStack>
        </div>
    );

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            off={DeprecatedArticleSortSelector}
            on={RedesignedArticleSortSelector}
        />
    );
};

export default ArticleSortSelector;
