import React, { JSX, Suspense, useCallback } from 'react';
import { SizeText, Text as DeprecatedText } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { AddCommentForm } from '@/features/AddCommentForm';
import { CommentList } from '@/entities/Comment';
import { useSelector } from 'react-redux';
import { getArticleComments } from '../../model/slice/articleDetailsCommentsSlice';
import useAppDispatch from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import addCommentForArticle from '../../model/services/addCommentForArticle/addCommentForArticle';
import { useTranslation } from 'react-i18next';
import useInitialEffect from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import fetchCommentsByArticleId from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import Loader from '@/shared/ui/deprecated/Loader';
import classNames from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import ArticleDetailsSelectors from '../../model/selectors/ArticleDetailsSelectors';
import { ArticleSelectors } from '@/entities/Article';
import { default as DeprecatedSkeleton } from '@/shared/ui/deprecated/Skeleton';
import { ToggleFeatures } from '@/shared/features';
import Skeleton from '@/shared/ui/redesigned/Skeleton';

interface IArticleDetailsCommentsProps {
    className?: string;
    id?: string | number;
}

const ArticleDetailsComments: React.FC<IArticleDetailsCommentsProps> = ({
    className,
    id,
}: IArticleDetailsCommentsProps): JSX.Element => {
    const { t } = useTranslation('article');

    const comments = useSelector(getArticleComments.selectAll);

    const dispatch = useAppDispatch();

    const isLoading = useSelector(ArticleSelectors.getArticleIsLoading);

    const isLoadingComments = useSelector(
        ArticleDetailsSelectors.getArticleCommentsIsLoading,
    );

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch],
    );

    const DeprecatedArticleDetailsCommentsLoader = (
        <DeprecatedSkeleton width={'100%'} height={'120px'} />
    );

    const RedesignedArticleDetailsCommentsLoader = (
        <Skeleton width={'100%'} height={'120px'} />
    );

    if (isLoading) {
        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                off={DeprecatedArticleDetailsCommentsLoader}
                on={RedesignedArticleDetailsCommentsLoader}
            />
        );
    }

    const DeprecatedArticleDetailsComments = (
        <VStack gap={'8'} max className={classNames('', {}, [className])}>
            <DeprecatedText size={SizeText.L} title={t('Comments')} />
            <Suspense fallback={<Loader />}>
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={isLoadingComments}
                    comments={comments}
                />
            </Suspense>
        </VStack>
    );

    const RedesignedArticleDetailsComments = (
        <VStack gap={'8'} max className={classNames('', {}, [className])}>
            <Text size={'l'} title={t('Comments')} />
            <Suspense fallback={<Loader />}>
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    isLoading={isLoadingComments}
                    comments={comments}
                />
            </Suspense>
        </VStack>
    );

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            off={DeprecatedArticleDetailsComments}
            on={RedesignedArticleDetailsComments}
        />
    );
};

export default ArticleDetailsComments;
