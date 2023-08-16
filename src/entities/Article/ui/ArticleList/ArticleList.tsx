import React, {HTMLAttributeAnchorTarget, JSX, memo} from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import ArticleView from '../../model/types/ArticleView';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import ArticleListItemSkeleton from '../ArticleListItem/ArticleListItemSkeleton';
import {IArticle} from '../../model/types/IArticle';

interface IArticleListProps {
    className?: string,
    articles: IArticle[];
    isLoading?: boolean,
    view?: ArticleView,
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SHELF ? 9 : 3)
    .fill(0)
    .map((item, index) => (
        <ArticleListItemSkeleton className={cls.card} key={index} view={view} />
    ));

const ArticleList: React.FC<IArticleListProps> = memo((props: IArticleListProps): JSX.Element => {
    const {className,
        articles,
        view = ArticleView.LIST,
        isLoading,
        target,
    } = props;


    return (
        <div data-testid={'ArticleList'}
            className={classNames(cls.articleList, {}, [className, cls[view]])}
        >
            {
                articles.map((item) =>
                    <ArticleListItem
                        article={item}
                        view={view}
                        key={item.id}
                        className={cls.card}
                        target={target}
                    />,
                )
            }
            {isLoading && getSkeletons(view)}
        </div>
    );
});

export default ArticleList;


