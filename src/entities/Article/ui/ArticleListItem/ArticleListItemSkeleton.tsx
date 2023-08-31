import React, { JSX, memo } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import ArticleView from '../../model/types/ArticleView';
import { default as DeprecatedSkeleton } from '@/shared/ui/deprecated/Skeleton';
import { Card as DeprecatedCard } from '@/shared/ui/deprecated/Card';
import { ToggleFeatures } from '@/shared/features';
import { Card } from '@/shared/ui/redesigned/Card';
import Skeleton from '@/shared/ui/redesigned/Skeleton';

interface IArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

const ArticleListItemSkeleton: React.FC<IArticleListItemSkeletonProps> = memo(
    ({ className, view }: IArticleListItemSkeletonProps): JSX.Element => {
        const DeprecatedArticleListItemSkeletonShelf = (
            <div
                className={classNames(cls.articleListItem, {}, [
                    className,
                    cls[view],
                ])}
            >
                <DeprecatedCard className={cls.card}>
                    <div className={cls.imageWrapper}>
                        <DeprecatedSkeleton
                            width={200}
                            height={200}
                            className={cls.image}
                        />
                    </div>
                    <div className={cls.infoWrapper}>
                        <DeprecatedSkeleton
                            width={130}
                            height={16}
                            className={cls.image}
                        />
                    </div>
                    <DeprecatedSkeleton
                        width={150}
                        height={16}
                        className={cls.image}
                    />
                </DeprecatedCard>
            </div>
        );

        const RedesignedArticleListItemSkeletonShelf = (
            <div
                className={classNames(cls.articleListItemRedesigned, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Card className={cls.card} border={'round'}>
                    <div className={cls.imageWrapper}>
                        <Skeleton
                            width={225}
                            height={140}
                            className={cls.image}
                        />
                    </div>
                    <div className={cls.infoWrapper}>
                        <Skeleton width={225} height={90} />
                    </div>
                    <Skeleton width={225} height={90} className={cls.title} />
                </Card>
            </div>
        );

        const DeprecatedArticleListItemSkeletonList = (
            <div
                className={classNames(cls.articleListItem, {}, [
                    className,
                    cls[view],
                ])}
            >
                <DeprecatedCard className={cls.card}>
                    <div className={cls.header}>
                        <DeprecatedSkeleton
                            borderRadius={'50%'}
                            height={30}
                            width={30}
                        />
                        <DeprecatedSkeleton
                            height={16}
                            width={150}
                            className={cls.username}
                        />
                        <DeprecatedSkeleton
                            height={16}
                            width={150}
                            className={cls.date}
                        />
                    </div>
                    <DeprecatedSkeleton
                        height={24}
                        width={250}
                        className={cls.title}
                    />
                    <DeprecatedSkeleton height={200} className={cls.image} />
                    <div className={cls.footer}>
                        <DeprecatedSkeleton height={36} width={200} />
                    </div>
                </DeprecatedCard>
            </div>
        );

        const RedesignedArticleListItemSkeletonList = (
            <div
                className={classNames(cls.articleListItemRedesigned, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Skeleton borderRadius={'50%'} height={30} width={30} />
                        <Skeleton
                            height={16}
                            width={150}
                            className={cls.username}
                        />
                        <Skeleton
                            height={16}
                            width={150}
                            className={cls.date}
                        />
                    </div>
                    <Skeleton height={24} width={250} className={cls.title} />
                    <Skeleton height={200} className={cls.image} />
                    <div className={cls.footer}>
                        <Skeleton height={36} width={200} />
                    </div>
                </Card>
            </div>
        );

        if (view === ArticleView.SHELF) {
            return (
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={RedesignedArticleListItemSkeletonShelf}
                    off={DeprecatedArticleListItemSkeletonShelf}
                />
            );
        }

        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={RedesignedArticleListItemSkeletonList}
                off={DeprecatedArticleListItemSkeletonList}
            />
        );
    },
);

export default ArticleListItemSkeleton;
