import React, {JSX, memo} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import {ArticleView} from 'entities/Article/model';
import Skeleton from 'widgets/Skeleton';
import {Card} from 'widgets/Card';

interface IArticleListItemSkeletonProps {
    className?: string
    view: ArticleView;
}


const ArticleListItemSkeleton: React.FC<IArticleListItemSkeletonProps> = memo(({className, view}: IArticleListItemSkeletonProps): JSX.Element => {
    if (view === ArticleView.SHELF) {
        return (
            <div className={classNames(cls.articleListItem, {}, [className, cls[view]])} >
                <Card className={cls.card}>
                    <div className={cls.imageWrapper}>
                        <Skeleton width={200} height={200} className={cls.image}/>
                    </div>
                    <div className={cls.infoWrapper}>
                        <Skeleton width={130} height={16} className={cls.image}/>
                    </div>
                    <Skeleton width={150} height={16} className={cls.image}/>
                </Card>
            </div>
        );
    }

    return (
        <div className={classNames(cls.articleListItem, {}, [className, cls[view]])} >
            <Card className={cls.card}>
                <div className={cls.header}>
                    <Skeleton borderRadius={'50%'} height={30} width={30}/>
                    <Skeleton height={16} width={150} className={cls.username}/>
                    <Skeleton height={16} width={150} className={cls.date}/>
                </div>
                <Skeleton height={24} width={250} className={cls.title}/>
                <Skeleton height={200} className={cls.image}/>
                <div className={cls.footer}>
                    <Skeleton height={36} width={200}/>
                </div>
            </Card>
        </div>
    );
});

export default ArticleListItemSkeleton;


