import React, { JSX } from 'react';
import { useSelector } from 'react-redux';
import { getArticles } from '../../model/slice/articlesPageSlice';
import ArticlesPageSelectors from '../../model/selectors/ArticlesPageSelectors';
import { ArticleList } from '@/entities/Article';
import { Text, ThemeText } from '@/shared/ui/deprecated/Text';

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

    if (error) {
        <Text theme={ThemeText.ERROR} title={error} />;
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
