import React, {JSX, memo} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import {IArticle} from '../../types/IArticle';
import ArticleView from '../../types/ArticleView';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import {Text} from 'shared/ui/Text';
import {useTranslation} from 'react-i18next';
import ArticleListItemSkeleton from 'entities/Article/model/ui/ArticleListItem/ArticleListItemSkeleton';

interface IArticleListProps {
    className?: string,
    articles: IArticle[];
    isLoading?: boolean,
    view?: ArticleView;
}

const ArticleList: React.FC<IArticleListProps> = memo((props: IArticleListProps): JSX.Element => {
    const {className, articles, view = ArticleView.LIST, isLoading} = props;

    const {t} = useTranslation('article');

    function renderArticle(article: IArticle) {
        return (
            <ArticleListItem key={article.id} className={cls.card} article={article} view={view}/>
        );
    }

    if (isLoading) {
        return (
            <div className={classNames(cls.articleList, {}, [className, cls[view]])}>
                {new Array(view === ArticleView.SHELF ? 9 : 3)
                    .fill(0)
                    .map((item, index) => (
                        <ArticleListItemSkeleton className={cls.card} key={index} view={view}/>
                    ))}
            </div>
        );
    }

    return (
        <div className={classNames(cls.articleList, {}, [className, cls[view]])} >
            {articles.length > 0 ? articles.map(renderArticle) : <Text title={'No titles'}/>}
        </div>
    );
});

export default ArticleList;


