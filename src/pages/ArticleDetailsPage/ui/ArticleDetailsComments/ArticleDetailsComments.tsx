import React, {JSX, Suspense, useCallback} from 'react';
import {SizeText, Text} from 'shared/ui/Text';
import {AddCommentForm} from 'features/AddCommentForm';
import {CommentList} from 'entities/Comment';
import {useSelector} from 'react-redux';
import {getArticleComments} from '../../model/slice/articleDetailsCommentsSlice';
import useAppDispatch from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import getArticleCommentsIsLoading
    from '../../model/selectors/getArticleCommentsIsLoading/getArticleCommentsIsLoading';
import addCommentForArticle from '../../model/services/addCommentForArticle/addCommentForArticle';
import {useTranslation} from 'react-i18next';
import useInitialEffect from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import fetchCommentsByArticleId
    from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import Loader from 'widgets/Loader';
import classNames from 'shared/lib/classNames/classNames';
import {VStack} from 'widgets/Stack';

interface IArticleDetailsCommentsProps {
    className?: string
    id?: string | number;
}

const ArticleDetailsComments: React.FC<IArticleDetailsCommentsProps> = ({className, id}: IArticleDetailsCommentsProps): JSX.Element => {
    const {t} = useTranslation('article');

    const comments = useSelector(getArticleComments.selectAll);

    const dispatch = useAppDispatch();

    const isLoadingComments = useSelector(getArticleCommentsIsLoading);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    return (
        <VStack gap={'8'} max className={classNames('', {}, [className])}>
            <Text size={SizeText.L}
                title={t('Comments')}/>
            <Suspense fallback={<Loader/>}>
                <AddCommentForm onSendComment={onSendComment}/>
                <CommentList isLoading={isLoadingComments} comments={comments}/>
            </Suspense>
        </VStack>
    );
};

export default ArticleDetailsComments;


