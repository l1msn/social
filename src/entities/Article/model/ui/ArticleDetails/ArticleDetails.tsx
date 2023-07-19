import React, {JSX, memo, useEffect} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader';
import {articleReducer} from '../../slice/articleSlice';
import useAppDispatch from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import fetchArticleById from '../../services/fetchArticleById/fetchArticleById';
import {useSelector} from 'react-redux';
import getArticleIsLoading from 'entities/Article/model/selectors/getArticleIsLoading/getArticleIsLoading';
import getArticleError from '../../selectors/getArticleError/getArticleError';
import getArticleData from '../../selectors/getArticleData/getArticleData';
import {AlignText, Text} from 'shared/ui/Text';
import {useTranslation} from 'react-i18next';
import Skeleton from 'widgets/Skeleton';

interface IArticleDetailsProps {
    className?: string
    id: number | string;
}

const reducers: ReducersList = {
    article: articleReducer,
};

const ArticleDetails: React.FC<IArticleDetailsProps> = memo(({className, id}: IArticleDetailsProps): JSX.Element => {
    const dispatch = useAppDispatch();
    const {t} = useTranslation('article');

    useEffect(() => {
        if (__PROJECT__ !== 'storybook' ) {
            dispatch(fetchArticleById(id));
        }
    }, [id, dispatch]);

    const isLoading = useSelector(getArticleIsLoading);
    const error = useSelector(getArticleError);
    const data = useSelector(getArticleData);

    let content;

    if (isLoading) {
        content = (
            <div>
                <Skeleton
                    className={cls.avatar}
                    width={200}
                    height={200}
                    borderRadius={'50%'}
                />
                <Skeleton
                    className={cls.title}
                    width={300}
                    height={32}
                />
                <Skeleton
                    className={cls.skeleton}
                    width={500}
                    height={32}
                />
                <Skeleton
                    className={cls.skeleton}
                    width={'100%'}
                    height={200}
                />
                <Skeleton
                    className={cls.skeleton}
                    width={'100%'}
                    height={200}
                />
            </div>
        );
    } else if (error) {
        content = (
            <Text
                text={t('Article loading error')}
                align={AlignText.CENTER}
            />
        );
    } else {
        content = (
            <div>{JSON.stringify(data)}</div>
        );
    }


    return (
        <DynamicModuleLoader removeAfterAmount reducers={reducers}>
            <div className={classNames(cls.article, {}, [className])}>
                {content}
            </div>
        </DynamicModuleLoader>
    );
});

export default ArticleDetails;


