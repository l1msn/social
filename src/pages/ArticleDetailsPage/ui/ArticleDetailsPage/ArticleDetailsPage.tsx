import React, {JSX, memo, useCallback} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import {useTranslation} from 'react-i18next';
import {useNavigate, useParams} from 'react-router-dom';
import NotFoundPage from 'pages/NotFoundPage';
import {SizeText, Text} from 'shared/ui/Text';
import {CommentList} from 'entities/Comment';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader';
import {getArticleComments} from '../../model/slice/articleDetailsCommentsSlice';
import {useSelector} from 'react-redux';
import getArticleCommentsIsLoading
    from 'pages/ArticleDetailsPage/model/selectors/getArticleCommentsIsLoading/getArticleCommentsIsLoading';
import getArticleCommentsError
    from 'pages/ArticleDetailsPage/model/selectors/getArticleCommentsError/getArticleCommentsError';
import PageError from 'widgets/PageError/ui/PageError';
import useInitialEffect from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import useAppDispatch from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import fetchCommentsByArticleId
    from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {AddCommentForm} from 'features/AddCommentForm';
import addCommentForArticle from 'pages/ArticleDetailsPage/model/services/addCommentForArticle/addCommentForArticle';
import Page from 'shared/ui/Page';
import {
    getArticleRecommendations,
} from '../../model/slice/articleDetailsRecommendationsSlice';
import getArticleDetailsRecommendationsIsLoading
    from '../../model/selectors/getArticleDetailsRecommendationsIsLoading/getArticleDetailsRecommendationsIsLoading';
import getArticleDetailsRecommendationsError
    from '../../model/selectors/getArticleDetailsRecommendationsError/getArticleDetailsRecommendationsError';
import fetchArticleRecommendations from '../../model/services/fetchArticleRecommendations/fetchArticleRecommendations';
import articleDetailsPageReducer from 'pages/ArticleDetailsPage/model/slice';
import ArticleDetailsPageHeader from 'pages/ArticleDetailsPage/ui/ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import {ArticleDetails, ArticleList, ArticleView} from 'entities/Article';

interface IArticleDetailsPageProps {
    className?: string
}
const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage: React.FC<IArticleDetailsPageProps> = memo(({className}: IArticleDetailsPageProps): JSX.Element => {
    const {t} = useTranslation('article');

    const {id} = useParams<string>();

    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendations.selectAll);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const isLoadingComments = useSelector(getArticleCommentsIsLoading);
    const errorComments = useSelector(getArticleCommentsError);
    const isLoadingRecommendations = useSelector(getArticleDetailsRecommendationsIsLoading);
    const errorRecommendations = useSelector(getArticleDetailsRecommendationsError);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    if (!id) {
        return (
            <NotFoundPage/>
        );
    }

    if (errorComments || errorRecommendations) {
        return (
            <PageError/>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterAmount>
            <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
                <ArticleDetailsPageHeader/>
                <ArticleDetails id={id} />
                <Text size={SizeText.L}
                    className={cls.commentTitle}
                    title={t('Recommendations')}/>
                <ArticleList
                    target={'_blank'}
                    className={cls.recommendations}
                    view={ArticleView.SHELF}
                    articles={recommendations}
                    isLoading={isLoadingRecommendations}
                />
                <Text size={SizeText.L}
                    className={cls.commentTitle}
                    title={t('Comments')}/>
                <AddCommentForm onSendComment={onSendComment}/>
                <CommentList isLoading={isLoadingComments} comments={comments}/>
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticleDetailsPage;


