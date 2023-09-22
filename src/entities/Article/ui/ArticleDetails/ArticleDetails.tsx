import React, { JSX, memo, useCallback, useEffect } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { articleReducer } from '../../model/slice/articleSlice';
import useAppDispatch from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import fetchArticleById from '../../model/services/fetchArticleById/fetchArticleById';
import { useSelector } from 'react-redux';
import ArticleSelectors from '../../model/selectors/ArticleSelectors';
import {
    AlignText,
    SizeText,
    Text as DeprecatedText,
} from '@/shared/ui/deprecated/Text';
import { useTranslation } from 'react-i18next';
import { default as DeprecatedSkeleton } from '@/shared/ui/deprecated/Skeleton';
import { default as DeprecatedAvatar } from '@/shared/ui/deprecated/Avatar';
import DeprecatedDateIcon from '@/shared/assets/icons/deprecated/date-icon.svg';
import DeprecatedViewsIcon from '@/shared/assets/icons/deprecated/views-icon.svg';
import { default as DeprecatedIcon } from '@/shared/ui/deprecated/Icon';
import { ArticleBlock, ArticleBlockType } from '../../model/types/IArticle';
import ArticleCode from '../ArticleCode/ArticleCode';
import ArticleText from '../ArticleText/ArticleText';
import ArticleImage from '../ArticleImage/ArticleImage';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { ToggleFeatures } from '@/shared/features';
import { Text } from '@/shared/ui/redesigned/Text';
import Skeleton from '@/shared/ui/redesigned/Skeleton';
import AppImage from '@/shared/ui/redesigned/AppImage';
import { RoutePaths } from '@/shared/consts/routerPaths';
import Button from '@/shared/ui/redesigned/Button';
import AppLink from '@/shared/ui/redesigned/AppLink';

interface IArticleDetailsProps {
    className?: string;
    id?: number | string;
}

const reducers: ReducersList = {
    article: articleReducer,
};

const ArticleDetails: React.FC<IArticleDetailsProps> = memo(
    ({ className, id }: IArticleDetailsProps): JSX.Element => {
        const dispatch = useAppDispatch();
        const { t } = useTranslation('article');

        useEffect(() => {
            if (__PROJECT__ !== 'storybook') {
                dispatch(fetchArticleById(id));
            }
        }, [id, dispatch]);

        const isLoading = useSelector(ArticleSelectors.getArticleIsLoading);
        const error = useSelector(ArticleSelectors.getArticleError);
        const article = useSelector(ArticleSelectors.getArticleData);

        const renderBlock = useCallback((block: ArticleBlock) => {
            switch (block.type) {
                case ArticleBlockType.CODE:
                    return (
                        <ArticleCode
                            key={block.id}
                            block={block}
                            className={cls.block}
                        />
                    );
                case ArticleBlockType.TEXT:
                    return (
                        <ArticleText
                            key={block.id}
                            block={block}
                            className={cls.block}
                        />
                    );
                case ArticleBlockType.IMAGE:
                    return (
                        <ArticleImage
                            key={block.id}
                            block={block}
                            className={cls.block}
                        />
                    );
                default:
                    return null;
            }
        }, []);

        let content;

        if (isLoading) {
            const DeprecatedArticleDetailsLoader = (
                <>
                    <DeprecatedSkeleton
                        className={cls.avatar}
                        width={200}
                        height={200}
                        borderRadius={'50%'}
                    />
                    <DeprecatedSkeleton
                        className={cls.title}
                        width={300}
                        height={32}
                    />
                    <DeprecatedSkeleton
                        className={cls.skeleton}
                        width={500}
                        height={32}
                    />
                    <DeprecatedSkeleton
                        className={cls.skeleton}
                        width="100%"
                        height={200}
                    />
                    <DeprecatedSkeleton
                        className={cls.skeleton}
                        width="100%"
                        height={200}
                    />
                </>
            );

            const RedesignedArticleDetailsLoader = (
                <>
                    <Skeleton
                        className={cls.avatar}
                        width={200}
                        height={200}
                        borderRadius={'50%'}
                    />
                    <Skeleton className={cls.title} width={300} height={32} />
                    <Skeleton
                        className={cls.skeleton}
                        width={500}
                        height={32}
                    />
                    <Skeleton
                        className={cls.skeleton}
                        width="100%"
                        height={200}
                    />
                    <Skeleton
                        className={cls.skeleton}
                        width="100%"
                        height={200}
                    />
                </>
            );

            content = (
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={RedesignedArticleDetailsLoader}
                    off={DeprecatedArticleDetailsLoader}
                />
            );
        } else if (error) {
            const DeprecatedArticleDetailsError = (
                <DeprecatedText
                    text={t('Article loading error')}
                    align={AlignText.CENTER}
                />
            );

            const RedesignedArticleDetailsError = (
                <Text
                    text={t('Article loading error')}
                    variant={'error'}
                    align={AlignText.CENTER}
                />
            );

            content = (
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={RedesignedArticleDetailsError}
                    off={DeprecatedArticleDetailsError}
                />
            );
        } else {
            const DeprecatedArticleDetailsContent = (
                <>
                    <HStack
                        justify={'center'}
                        max
                        className={cls.avatarWrapper}
                    >
                        <DeprecatedAvatar
                            size={200}
                            src={article?.img}
                            className={cls.avatar}
                        />
                    </HStack>
                    <VStack gap={'4'} max data-testid={'ArticleDetails.Info'}>
                        <DeprecatedText
                            size={SizeText.L}
                            className={cls.title}
                            title={article?.title}
                            text={article?.subtitle}
                        />
                        <HStack gap={'8'} className={cls.articleInfo}>
                            <DeprecatedIcon
                                className={cls.icon}
                                Svg={DeprecatedDateIcon}
                            />
                            <DeprecatedText text={article?.createdAt} />
                        </HStack>
                        <HStack gap={'8'} className={cls.articleInfo}>
                            <DeprecatedIcon
                                className={cls.icon}
                                Svg={DeprecatedViewsIcon}
                            />
                            <DeprecatedText text={article?.views} />
                        </HStack>
                    </VStack>
                    {article?.blocks.map(renderBlock)}
                </>
            );

            const RedesignedArticleDetailsContent = (
                <>
                    <AppLink to={RoutePaths.getRouteArticles()}>
                        <Button variant={'outline'}>
                            {t('Going back...')}
                        </Button>
                    </AppLink>
                    <VStack gap={'4'} data-testid={'ArticleDetails.Info'}>
                        <Text
                            size={'l'}
                            className={cls.title}
                            title={article?.title}
                            bold
                        />
                        <Text
                            className={cls.subtitle}
                            title={article?.subtitle}
                        />
                    </VStack>
                    <HStack max justify={'center'} align={'center'}>
                        <AppImage
                            fallback={
                                <Skeleton
                                    width={'100%'}
                                    height={420}
                                    borderRadius={'16px'}
                                />
                            }
                            src={article?.img}
                            className={cls.img}
                        />
                    </HStack>
                    {article?.blocks.map(renderBlock)}
                </>
            );

            content = (
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    off={DeprecatedArticleDetailsContent}
                    on={RedesignedArticleDetailsContent}
                />
            );
        }

        return (
            <DynamicModuleLoader removeAfterAmount reducers={reducers}>
                <VStack
                    max
                    gap={'16'}
                    className={classNames(cls.article, {}, [className])}
                >
                    {content}
                </VStack>
            </DynamicModuleLoader>
        );
    },
);

export default ArticleDetails;
