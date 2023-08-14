import React, {JSX, useCallback, useMemo} from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import {ITabItem, Tabs} from '@/shared/ui/Tabs';
import {useTranslation} from 'react-i18next';
import {ArticleType} from '@/entities/Article';

interface IArticleTypeTabsProps {
    className?: string,
    value: ArticleType;
    onChangeType: (type: ArticleType) => void
}

const ArticleTypeTabs: React.FC<IArticleTypeTabsProps> = ({className, value, onChangeType}: IArticleTypeTabsProps): JSX.Element => {
    const {t} = useTranslation('article');

    const typeTabs = useMemo<ITabItem[]>(() => [
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
    ], [t]);

    const onTabClick = useCallback((tab: ITabItem) => {
        onChangeType(tab.value as ArticleType);
    }, [onChangeType]);

    return (
        <Tabs
            value={value}
            tabs={typeTabs}
            onTabClick={onTabClick}
            className={classNames('', {}, [className])}
        />
    );
};

export default ArticleTypeTabs;


