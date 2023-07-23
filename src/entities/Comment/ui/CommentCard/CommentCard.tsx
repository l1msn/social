import React, {JSX, memo} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import IComment from '../../model/types/IComment';
import Avatar from 'widgets/Avatar';
import {Text} from 'shared/ui/Text';
import Skeleton from 'widgets/Skeleton';

interface ICommentCardProps {
    className?: string;
    comment: IComment;
    isLoading?: boolean
}


const CommentCard: React.FC<ICommentCardProps> = memo(({className, comment, isLoading}: ICommentCardProps): JSX.Element => {
    if (isLoading) {
        return (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} borderRadius={'50%'}/>
                    <Skeleton width={100} height={16} className={cls.username}/>
                </div>
                <Skeleton className={cls.text} width={'100%'} height={50}/>
            </div>
        );
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <div className={cls.header}>
                {comment.user.avatar && <Avatar src={comment.user.avatar} size={30}/>}
                <Text className={cls.username} title={comment.user.username}/>
            </div>
            <Text className={cls.text} text={comment.text}/>
        </div>
    );
});

export default CommentCard;


