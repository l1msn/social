import IComment from '../../model/types/IComment';
import React, { JSX, memo } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { useTranslation } from 'react-i18next';
import CommentCard from '../CommentCard/CommentCard';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures } from '@/shared/features';
import { Card } from '@/shared/ui/redesigned/Card';

interface ICommentListProps {
    className?: string;
    comments?: IComment[];
    isLoading?: boolean;
}

const CommentList: React.FC<ICommentListProps> = memo(
    ({ className, comments, isLoading }: ICommentListProps): JSX.Element => {
        const { t } = useTranslation('comment');

        if (isLoading) {
            return (
                <VStack
                    gap={'16'}
                    max
                    className={classNames('', {}, [className])}
                >
                    <CommentCard comment={{} as IComment} isLoading />
                    <CommentCard comment={{} as IComment} isLoading />
                    <CommentCard comment={{} as IComment} isLoading />
                </VStack>
            );
        }

        return (
            <VStack gap={'16'} max className={classNames('', {}, [className])}>
                {comments?.length ? (
                    comments.map((comment: IComment) => (
                        <CommentCard
                            isLoading={isLoading}
                            comment={comment}
                            key={comment.id}
                        />
                    ))
                ) : (
                    <ToggleFeatures
                        feature={'isAppRedesigned'}
                        on={
                            <Card max>
                                <HStack max justify={'center'} align={'center'}>
                                    <Text title={t('No comments')} />
                                </HStack>
                            </Card>
                        }
                        off={<TextDeprecated text={t('No comments')} />}
                    />
                )}
            </VStack>
        );
    },
);

export default CommentList;
