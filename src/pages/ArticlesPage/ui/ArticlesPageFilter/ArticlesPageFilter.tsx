import React, { JSX, memo } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesPageFilter.module.scss';
import { Card } from '@/shared/ui/deprecated/Card';
import { Input } from '@/shared/ui/deprecated/Input';
import Button from '@/shared/ui/deprecated/Button';
import ThemeButton from '@/shared/ui/deprecated/Button/consts/ThemeButton';
import { ArticleSortSelector } from '@/features/ArticleSortSelector';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { ArticleTypeTabs } from '@/features/ArticleTypeTabs';
import useArticlesFilters from '../../lib/hooks/useArticlesFilters';

interface IArticlesPageFilterProps {
    className?: string;
}

const ArticlesPageFilter: React.FC<IArticlesPageFilterProps> = memo(
    ({ className }: IArticlesPageFilterProps): JSX.Element => {
        const { t } = useTranslation('article');

        const {
            onChangeSearch,
            onChangeType,
            onChangeView,
            onClearSearch,
            onChangeOrder,
            onChangeSort,
            type,
            sort,
            view,
            search,
            order,
        } = useArticlesFilters();

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
