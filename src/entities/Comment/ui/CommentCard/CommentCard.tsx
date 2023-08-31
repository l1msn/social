import React, { JSX, memo } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import IComment from '../../model/types/IComment';
import { default as DeprecatedAvatar } from '@/shared/ui/deprecated/Avatar';
import { Text as DeprecatedText } from '@/shared/ui/deprecated/Text';
import { default as DeprecatedSkeleton } from '@/shared/ui/deprecated/Skeleton';
import { default as DeprecatedAppLink } from '@/shared/ui/deprecated/AppLink';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { RoutePaths } from '@/shared/consts/routerPaths';
import { ToggleFeatures } from '@/shared/features';
import Skeleton from '@/shared/ui/redesigned/Skeleton';
import AppLink from '@/shared/ui/redesigned/AppLink';
import { Text } from '@/shared/ui/redesigned/Text';
import Avatar from '@/shared/ui/redesigned/Avatar';
import { Card } from '@/shared/ui/redesigned/Card';

interface ICommentCardProps {
    className?: string;
    comment: IComment;
    isLoading?: boolean;
}

const CommentCard: React.FC<ICommentCardProps> = memo(
    ({
        className,
        comment,
        isLoading,
    }: ICommentCardProps): JSX.Element | null => {
        const DeprecatedCommentCardLoader = (
            <div
                data-testid={'CommentCard.Loading'}
                className={classNames(cls.CommentCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <div className={cls.header}>
                    <DeprecatedSkeleton
                        width={30}
                        height={30}
                        borderRadius={'50%'}
                    />
                    <DeprecatedSkeleton
                        width={100}
                        height={16}
                        className={cls.username}
                    />
                </div>
                <DeprecatedSkeleton
                    className={cls.text}
                    width={'100%'}
                    height={50}
                />
            </div>
        );

        const RedesignedCommentCardLoader = (
            <div
                data-testid={'CommentCard.Loading'}
                className={classNames(cls.CommentCard, {}, [
                    className,
                    cls.loading,
                ])}
            >
                <div className={cls.header}>
                    <Skeleton width={30} height={30} borderRadius={'50%'} />
                    <Skeleton
                        width={100}
                        height={16}
                        className={cls.username}
                    />
                </div>
                <Skeleton className={cls.text} width={'100%'} height={50} />
            </div>
        );

        if (isLoading) {
            return (
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={RedesignedCommentCardLoader}
                    off={DeprecatedCommentCardLoader}
                />
            );
        }

        if (!comment) {
            return null;
        }

        const DeprecatedCommentCard = (
            <VStack
                data-testid={'CommentCard.Content'}
                gap={'8'}
                max
                className={classNames(cls.CommentCard, {}, [className])}
            >
                <DeprecatedAppLink
                    to={RoutePaths.getRouteProfile(comment.user.id)}
                    className={cls.header}
                >
                    {comment.user.avatar && (
                        <DeprecatedAvatar src={comment.user.avatar} size={30} />
                    )}
                    <DeprecatedText
                        className={cls.username}
                        title={comment.user.username}
                    />
                </DeprecatedAppLink>
                <DeprecatedText className={cls.text} text={comment.text} />
            </VStack>
        );

        const RedesignedCommentCard = (
            <Card max padding={'24'} border={'round'}>
                <VStack
                    data-testid={'CommentCard.Content'}
                    gap={'8'}
                    max
                    className={classNames(cls.CommentCardRedesigned, {}, [
                        className,
                    ])}
                >
                    <AppLink
                        to={RoutePaths.getRouteProfile(comment.user.id)}
                        className={cls.header}
                    >
                        <HStack gap={'8'}>
                            {comment.user.avatar && (
                                <Avatar src={comment.user.avatar} size={30} />
                            )}
                            <Text
                                className={cls.username}
                                title={comment.user.username}
                            />
                        </HStack>
                    </AppLink>
                    <Text className={cls.text} text={comment.text} />
                </VStack>
            </Card>
        );

        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={RedesignedCommentCard}
                off={DeprecatedCommentCard}
            />
        );
    },
);

export default CommentCard;
