import React, { JSX, memo } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import IComment from '../../model/types/IComment';
import Avatar from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';
import Skeleton from '@/shared/ui/Skeleton';
import AppLink from '@/shared/ui/AppLink';
import { VStack } from '@/shared/ui/Stack';
import { RoutePaths } from '@/shared/consts/routerPaths';

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
        if (isLoading) {
            return (
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
        }

        if (!comment) {
            return null;
        }

        return (
            <VStack
                data-testid={'CommentCard.Content'}
                gap={'8'}
                max
                className={classNames(cls.CommentCard, {}, [className])}
            >
                <AppLink
                    to={RoutePaths.getRouteProfile(comment.user.id)}
                    className={cls.header}
                >
                    {comment.user.avatar && (
                        <Avatar src={comment.user.avatar} size={30} />
                    )}
                    <Text
                        className={cls.username}
                        title={comment.user.username}
                    />
                </AppLink>
                <Text className={cls.text} text={comment.text} />
            </VStack>
        );
    },
);

export default CommentCard;
