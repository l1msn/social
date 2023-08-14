import React, {JSX} from 'react';
import {useSelector} from 'react-redux';
import {getArticles} from '../../model/slice/articlePageSlice';
import ArticlePageSelectors from '../../model/selectors/ArticlePageSelectors';
import {ArticleList} from '@/entities/Article';
import {Text, ThemeText} from '@/shared/ui/Text';

interface IArticleInfiniteListProps {
    className?: string
}

const ArticleInfiniteList: React.FC<IArticleInfiniteListProps> = ({className}: IArticleInfiniteListProps): JSX.Element => {
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(ArticlePageSelectors.getArticlePageIsLoading);
    const view = useSelector(ArticlePageSelectors.getArticlePageView);
    const error = useSelector(ArticlePageSelectors.getArticlePageError);

    if (error) {
        <Text theme={ThemeText.ERROR} title={error}/>;
    }

    return (
        <ArticleList className={className} isLoading={isLoading} view={view} articles={articles}/>
    );
};

export default ArticleInfiniteList;


