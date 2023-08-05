import React, {HTMLAttributeAnchorTarget, JSX, memo} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import ArticleView from '../../model/types/ArticleView';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import ArticleListItemSkeleton from '../ArticleListItem/ArticleListItemSkeleton';
import {List, ListRowProps, WindowScroller} from 'react-virtualized';
import PAGE_ID from 'shared/consts/ids';
import {IArticle} from '../../model/types/IArticle';
import Loader from 'widgets/Loader';

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
    const {className, target, articles, view = ArticleView.LIST, isLoading} = props;

    const isList = view === ArticleView.LIST;

    const itemsPerRow = isList ? 1 : 4;

    const rowCount = isList ? articles.length : Math.ceil(articles.length / itemsPerRow);

    function rowRender({index, key, style}: ListRowProps) {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i++) {
            items.push(
                <ArticleListItem
                    target={target}
                    className={cls.card}
                    article={articles[i]}
                    view={view}
                    key={articles[i].id}
                />,
            );
        }

        return (
            <div key={key} style={style} className={cls.row}>
                {items}
            </div>
        );
    }

    if (isLoading) {
        return (
            <Loader/>
        );
    }

    return (
        <WindowScroller
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {({height, width, registerChild, scrollTop, isScrolling, onChildScroll}) => (
                <div ref={() => registerChild}
                    className={classNames(cls.articleList, {}, [className, cls[view]])}
                >
                    <List
                        height={height ?? 700}
                        rowCount={rowCount}
                        rowHeight={isList ? 700 : 330}
                        rowRenderer={rowRender}
                        width={width ? width - 80 : 640}
                        autoHeight
                        onScroll={onChildScroll}
                        isScrolling={isScrolling}
                        scrollTop={scrollTop}
                    />
                    {isLoading && getSkeletons(view)}
                </div>
            )}
        </WindowScroller>
    );
});

export default ArticleList;


