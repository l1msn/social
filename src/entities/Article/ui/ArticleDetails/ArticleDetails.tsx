import React, {JSX, memo, useCallback, useEffect} from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './ArticleDetails.module.scss';
import {DynamicModuleLoader, ReducersList} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {articleReducer} from '../../model/slice/articleSlice';
import useAppDispatch from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import fetchArticleById from '../../model/services/fetchArticleById/fetchArticleById';
import {useSelector} from 'react-redux';
import ArticleSelectors from '../../model/selectors/ArticleSelectors';
import {AlignText, SizeText, Text} from '@/shared/ui/Text';
import {useTranslation} from 'react-i18next';
import Skeleton from '@/shared/ui/Skeleton';
import Avatar from '@/shared/ui/Avatar';
import DateIcon from '@/shared/assets/icons/date-icon.svg';
import ViewsIcon from '@/shared/assets/icons/views-icon.svg';
import Icon from '@/shared/ui/Icon';
import {ArticleBlock, ArticleBlockType} from '../../model/types/IArticle';
import ArticleCode from '../ArticleCode/ArticleCode';
import ArticleText from '../ArticleText/ArticleText';
import ArticleImage from '../ArticleImage/ArticleImage';
import {HStack, VStack} from '@/shared/ui/Stack';

interface IArticleDetailsProps {
    className?: string
    id?: number | string;
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

    const isLoading = useSelector(ArticleSelectors.getArticleIsLoading);
    const error = useSelector(ArticleSelectors.getArticleError);
    const article = useSelector(ArticleSelectors.getArticleData);

    const renderBlock = useCallback((block: ArticleBlock) => {
        switch (block.type) {
        case ArticleBlockType.CODE:
            return <ArticleCode key={block.id} block={block} className={cls.block}/>;
        case ArticleBlockType.TEXT:
            return <ArticleText key={block.id} block={block} className={cls.block}/>;
        case ArticleBlockType.IMAGE:
            return <ArticleImage key={block.id} block={block} className={cls.block}/>;
        default:
            return null;
        }
    }, []);

    let content;

    if (isLoading) {
        content = (
            <>
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
                    width='100%'
                    height={200}
                />
                <Skeleton
                    className={cls.skeleton}
                    width='100%'
                    height={200}
                />
            </>
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
            <>
                <HStack justify={'center'} max className={cls.avatarWrapper}>
                    <Avatar size={200} src={article?.img} className={cls.avatar}/>
                </HStack>
                <VStack gap={'4'} max data-testid={'ArticleDetails.Info'}>
                    <Text size={SizeText.L}
                        className={cls.title}
                        title={article?.title}
                        text={article?.subtitle}
                    />
                    <HStack gap={'8'} className={cls.articleInfo}>
                        <Icon className={cls.icon} Svg={DateIcon}/>
                        <Text
                            text={article?.createAt}
                        />
                    </HStack>
                    <HStack gap={'8'} className={cls.articleInfo}>
                        <Icon className={cls.icon} Svg={ViewsIcon}/>
                        <Text
                            text={article?.views}
                        />
                    </HStack>
                </VStack>
                {article?.blocks.map(renderBlock)}
            </>
        );
    }


    return (
        <DynamicModuleLoader removeAfterAmount reducers={reducers}>
            <VStack max gap={'16'} className={classNames(cls.article, {}, [className])}>
                {content}
            </VStack>
        </DynamicModuleLoader>
    );
});

export default ArticleDetails;


