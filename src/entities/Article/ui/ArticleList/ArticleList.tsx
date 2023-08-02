import React, {HTMLAttributeAnchorTarget, JSX, memo} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import {IArticle} from '../../model/types/IArticle';
import ArticleView from '../../model/types/ArticleView';
import ArticleListItem from '../ArticleListItem/ArticleListItem';
import {SizeText, Text} from 'shared/ui/Text';
import {useTranslation} from 'react-i18next';
import ArticleListItemSkeleton from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';

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

    const {t} = useTranslation('article');

    function renderArticle(article: IArticle) {
        return (
            <ArticleListItem target={target} key={article.id} className={cls.card} article={article} view={view}/>
        );
    }

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.articleList, {}, [className, cls[view]])} >
                <Text size={SizeText.L} title={t('No titles')}/>
            </div>
        );
    }

    return (
        <div className={classNames(cls.articleList, {}, [className, cls[view]])} >
            {articles.length > 0 ? articles.map(renderArticle) : null}
            {isLoading && getSkeletons(view)}
        </div>
    );
});

export default ArticleList;


