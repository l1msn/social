import React, { JSX, useCallback, useMemo } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import { ITabItem, Tabs as DeprecatedTabs } from '@/shared/ui/deprecated/Tabs';
import { useTranslation } from 'react-i18next';
import { ArticleType } from '@/entities/Article';
import { ToggleFeatures } from '@/shared/features';
import { Tabs } from '@/shared/ui/redesigned/Tabs';

interface IArticleTypeTabsProps {
    className?: string;
    value: ArticleType;
    onChangeType: (type: ArticleType) => void;
}

const ArticleTypeTabs: React.FC<IArticleTypeTabsProps> = ({
    className,
    value,
    onChangeType,
}: IArticleTypeTabsProps): JSX.Element => {
    const { t } = useTranslation('article');

    const typeTabs = useMemo<ITabItem[]>(
        () => [
            {
                value: ArticleType.ALL,
                content: t('All'),
            },
            {
                value: ArticleType.IT,
                content: t('IT'),
            },
            {
                value: ArticleType.ECONOMICS,
                content: t('Economics'),
            },
            {
                value: ArticleType.SCIENCE,
                content: t('Science'),
            },
        ],
        [t],
    );

    const onTabClick = useCallback(
        (tab: ITabItem) => {
            onChangeType(tab.value as ArticleType);
        },
        [onChangeType],
    );

    const DeprecatedArticleTypeTabs = (
        <DeprecatedTabs
            value={value}
            tabs={typeTabs}
            onTabClick={onTabClick}
            className={classNames('', {}, [className])}
        />
    );

    const RedesignedArticleTypeTabs = (
        <Tabs
            value={value}
            tabs={typeTabs}
            onTabClick={onTabClick}
            className={classNames('', {}, [className])}
        />
    );

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={RedesignedArticleTypeTabs}
            off={DeprecatedArticleTypeTabs}
        />
    );
};

export default ArticleTypeTabs;
