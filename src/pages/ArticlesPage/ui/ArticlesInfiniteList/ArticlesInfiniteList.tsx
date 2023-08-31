import React, { JSX } from 'react';
import { useSelector } from 'react-redux';
import { getArticles } from '../../model/slice/articlesPageSlice';
import ArticlesPageSelectors from '../../model/selectors/ArticlesPageSelectors';
import { ArticleList } from '@/entities/Article';
import { Text as DeprecatedText, ThemeText } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ToggleFeatures } from '@/shared/features';

interface IArticlesInfiniteListProps {
    className?: string;
}

const ArticlesInfiniteList: React.FC<IArticlesInfiniteListProps> = ({
    className,
}: IArticlesInfiniteListProps): JSX.Element => {
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(
        ArticlesPageSelectors.getArticlesPageIsLoading,
    );
    const view = useSelector(ArticlesPageSelectors.getArticlesPageView);
    const error = useSelector(ArticlesPageSelectors.getArticlesPageError);

    const DeprecatedArticlesInfiniteListError = (
        <DeprecatedText theme={ThemeText.ERROR} title={error} />
    );

    const RedesignedArticlesInfiniteListError = (
        <Text variant={'error'} title={error} />
    );

    if (error) {
        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={RedesignedArticlesInfiniteListError}
                off={DeprecatedArticlesInfiniteListError}
            />
        );
    }

    return (
        <ArticleList
            className={className}
            isLoading={isLoading}
            view={view}
            articles={articles}
        />
    );
};

export default ArticlesInfiniteList;
