import React, {JSX, memo, useEffect} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import {useTranslation} from 'react-i18next';
import {ArticleDetails} from 'entities/Article/model';
import {useParams} from 'react-router-dom';
import NotFoundPage from 'pages/NotFoundPage';
import {Text} from 'shared/ui/Text';
import {CommentList} from 'entities/Comment';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader';
import {articleDetailsCommentsReducer, getArticleComments} from '../../model/slice/articleDetailsCommentsSlice';
import {useSelector} from 'react-redux';
import getArticleCommentsIsLoading from '../../selectors/getArticleCommentsIsLoading/getArticleCommentsIsLoading';
import getArticleCommentsError from '../../selectors/getArticleCommentsError/getArticleCommentsError';
import PageError from 'widgets/PageError/ui/PageError';
import useInitialEffect from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import useAppDispatch from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import fetchCommentsByArticleId
    from 'pages/ArticleDetailsPage/services/fetchCommentsByArticleId/fetchCommentsByArticleId';

interface IArticleDetailsPageProps {
    className?: string
}
const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentsReducer,
};

const ArticleDetailsPage: React.FC<IArticleDetailsPageProps> = memo(({className}: IArticleDetailsPageProps): JSX.Element => {
    const {t} = useTranslation('article');

    const {id} = useParams<string>();

    const comments = useSelector(getArticleComments.selectAll);

    const dispatch = useAppDispatch();

    const isLoading = useSelector(getArticleCommentsIsLoading);
    const error = useSelector(getArticleCommentsError);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    if (!id) {
        return (
            <NotFoundPage/>
        );
    }

    if (error) {
        return (
            <PageError/>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterAmount>
            <div className={classNames(cls.articleDetailsPage, {}, [className])}>
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={t('Comments')}/>
                <CommentList isLoading={isLoading} comments={comments}/>
            </div>
        </DynamicModuleLoader>
    );
});

export default ArticleDetailsPage;


