import React, {JSX} from 'react';
import {useSelector} from 'react-redux';
import {getArticles} from '../../model/slice/articlePageSlice';
import getArticlePageError from '../../model/selectors/getArticlePageError/getArticlePageError';
import getArticlePageIsLoading from '../../model/selectors/getArticlePageIsLoading/getArticlePageIsLoading';
import getArticlePageView from '../../model/selectors/getArticlePageView/getArticlePageView';
import {ArticleList} from 'entities/Article';
import {Text, ThemeText} from 'shared/ui/Text';

interface IArticleInfiniteListProps {
    className?: string
}

const ArticleInfiniteList: React.FC<IArticleInfiniteListProps> = ({className}: IArticleInfiniteListProps): JSX.Element => {
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlePageIsLoading);
    const view = useSelector(getArticlePageView);
    const error = useSelector(getArticlePageError);

    if (error) {
        <Text theme={ThemeText.ERROR} title={error}/>;
    }

    return (
        <ArticleList className={className} isLoading={isLoading} view={view} articles={articles}/>
    );
};

export default ArticleInfiniteList;


