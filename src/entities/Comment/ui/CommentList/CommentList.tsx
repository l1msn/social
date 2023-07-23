import IComment from '../../model/types/IComment';
import React, {JSX, memo} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';
import {Text} from 'shared/ui/Text';
import {useTranslation} from 'react-i18next';
import CommentCard from '../CommentCard/CommentCard';

interface ICommentListProps {
    className?: string,
    comments?: IComment[],
    isLoading?: boolean;
}


const CommentList: React.FC<ICommentListProps> = memo(({className, comments, isLoading}: ICommentListProps): JSX.Element => {
    const {t} = useTranslation('comment');

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            {comments?.length ?
                comments.map((comment: IComment) => <CommentCard isLoading={isLoading} className={cls.comment} comment={comment} key={comment.id}/>) :
                <Text text={t('No comments')}/>
            }
        </div>
    );
});

export default CommentList;


