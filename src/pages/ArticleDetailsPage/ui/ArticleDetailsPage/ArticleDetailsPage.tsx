import React, {JSX, memo, useCallback} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import {useTranslation} from 'react-i18next';
import {ArticleDetails} from 'entities/Article/model';
import {useNavigate, useParams} from 'react-router-dom';
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
    from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import {AddCommentForm} from 'features/AddCommentForm';
import addCommentForArticle from '../../services/addCommentForArticle/addCommentForArticle';
import Button from 'shared/ui/Button';
import ThemeButton from 'shared/ui/Button/consts/ThemeButton';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import Page from 'shared/ui/Page';

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
    const navigate = useNavigate();

    const isLoading = useSelector(getArticleCommentsIsLoading);
    const error = useSelector(getArticleCommentsError);

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

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
            <Page className={classNames(cls.articleDetailsPage, {}, [className])}>
                <Button theme={ThemeButton.WITHLINE} onClick={onBackToList}>
                    {t('Back to list')}
                </Button>
                <ArticleDetails id={id} />
                <Text className={cls.commentTitle} title={t('Comments')}/>
                <AddCommentForm onSendComment={onSendComment}/>
                <CommentList isLoading={isLoading} comments={comments}/>
            </Page>
        </DynamicModuleLoader>
    );
});

export default ArticleDetailsPage;


