import React, { HTMLAttributeAnchorTarget, JSX, memo } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import { useTranslation } from 'react-i18next';
import { Text as DeprecatedText } from '@/shared/ui/deprecated/Text';
import { default as DeprecatedIcon } from '@/shared/ui/deprecated/Icon';
import { Card as DeprecatedCard } from '@/shared/ui/deprecated/Card';
import { default as DeprecatedAvatar } from '@/shared/ui/deprecated/Avatar';
import { default as DeprecatedButton } from '@/shared/ui/deprecated/Button';
import { default as DeprecatedAppLink } from '@/shared/ui/deprecated/AppLink';
import { RoutePaths } from '@/shared/consts/routerPaths';
import { default as DeprecatedSkeleton } from '@/shared/ui/deprecated/Skeleton';
import ThemeButton from '@/shared/ui/deprecated/Button/consts/ThemeButton';
import ArticleText from '../ArticleText/ArticleText';
import {
    ArticleBlockType,
    IArticle,
    IArticleTextBlock,
} from '../../model/types/IArticle';
import ArticleView from '../../model/types/ArticleView';
import { ToggleFeatures } from '@/shared/features';
import AppImage from '@/shared/ui/redesigned/AppImage';
import Skeleton from '@/shared/ui/redesigned/Skeleton';
import AppLink from '@/shared/ui/redesigned/AppLink';
import { Card } from '@/shared/ui/redesigned/Card';
import Icon from '@/shared/ui/redesigned/Icon';
import { Text } from '@/shared/ui/redesigned/Text';
import Button from '@/shared/ui/redesigned/Button';
import Avatar from '@/shared/ui/redesigned/Avatar';
import ViewsIconDeprecated from '@/shared/assets/icons/deprecated/views-icon.svg';
import ViewsIcon from '@/shared/assets/icons/redesigned/eye.svg';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

interface IArticleListItemProps {
    className?: string;
    article: IArticle;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const ArticleListItem: React.FC<IArticleListItemProps> = memo(
    (props: IArticleListItemProps): JSX.Element => {
        const { className, article, view, target } = props;

        const { t } = useTranslation('article');

        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as IArticleTextBlock;

        const DeprecatedArticleListItemShelf = (
            <DeprecatedAppLink
                data-testid={'ArticleListItem'}
                target={target}
                className={classNames(cls.articleListItem, {}, [
                    className,
                    cls[view],
                ])}
                to={RoutePaths.getRouteArticleDetails(article.id)}
            >
                <DeprecatedCard className={cls.card}>
                    <div className={cls.imageWrapper}>
                        <AppImage
                            fallback={
                                <DeprecatedSkeleton width={200} height={250} />
                            }
                            src={article.img}
                            alt={article.title}
                            className={cls.image}
                        />
                        <DeprecatedText
                            text={article.createdAt}
                            className={cls.date}
                        />
                    </div>
                    <div className={cls.infoWrapper}>
                        <DeprecatedText
                            text={article.type.join(', ')}
                            className={cls.types}
                        />
                        <DeprecatedText
                            text={article.views.toString()}
                            className={cls.views}
                        />
                        <DeprecatedIcon Svg={ViewsIconDeprecated} />
                    </div>
                    <DeprecatedText
                        text={article.title}
                        className={cls.title}
                    />
                </DeprecatedCard>
            </DeprecatedAppLink>
        );

        const RedesignedArticleListItemShelf = (
            <AppLink
                data-testid={'ArticleListItem'}
                target={target}
                className={classNames(cls.articleListItemRedesigned, {}, [
                    className,
                    cls[view],
                ])}
                to={RoutePaths.getRouteArticleDetails(article.id)}
            >
                <Card className={cls.card} border={'round'} padding={'0'}>
                    <AppImage
                        fallback={<Skeleton width={'100%'} height={200} />}
                        src={article.img}
                        alt={article.title}
                        className={cls.image}
                    />
                    <VStack className={cls.info} gap={'4'}>
                        <Text title={article.title} className={cls.title} />
                        <VStack gap={'4'} className={cls.footer} max>
                            <HStack justify={'between'} max>
                                <Text
                                    text={article.createdAt}
                                    className={cls.date}
                                />
                                <HStack gap={'8'}>
                                    <Icon Svg={ViewsIcon} />
                                    <Text
                                        text={article.views.toString()}
                                        className={cls.views}
                                    />
                                </HStack>
                            </HStack>
                            <HStack gap={'4'}>
                                <Avatar
                                    size={32}
                                    src={article.user.avatar}
                                    className={cls.avatar}
                                />
                                <Text bold text={article.user.username} />
                            </HStack>
                        </VStack>
                    </VStack>
                </Card>
            </AppLink>
        );

        const DeprecatedArticleListItemList = (
            <div
                data-testid={'ArticleListItem'}
                className={classNames(cls.articleListItem, {}, [
                    className,
                    cls[view],
                ])}
            >
                <DeprecatedCard className={cls.card}>
                    <div className={cls.header}>
                        <DeprecatedAvatar src={article.user.avatar} size={30} />
                        <DeprecatedText
                            text={article.user.username}
                            className={cls.username}
                        />
                        <DeprecatedText
                            text={article.createdAt}
                            className={cls.date}
                        />
                    </div>
                    <DeprecatedText
                        text={article.title}
                        className={cls.title}
                    />
                    <DeprecatedText
                        text={article.type.join(', ')}
                        className={cls.types}
                    />
                    <AppImage
                        fallback={
                            <DeprecatedSkeleton width={'100%'} height={250} />
                        }
                        src={article.img}
                        alt={article.title}
                        className={cls.image}
                    />
                    {textBlock && (
                        <ArticleText
                            block={textBlock}
                            className={cls.textBlock}
                        />
                    )}
                    <div className={cls.footer}>
                        <DeprecatedAppLink
                            target={target}
                            to={RoutePaths.getRouteArticleDetails(article.id)}
                        >
                            <DeprecatedButton theme={ThemeButton.CLEAR}>
                                {t('Read more...')}
                            </DeprecatedButton>
                        </DeprecatedAppLink>
                        <DeprecatedText
                            text={article.views.toString()}
                            className={cls.views}
                        />
                        <DeprecatedIcon Svg={ViewsIconDeprecated} />
                    </div>
                </DeprecatedCard>
            </div>
        );

        const RedesignedArticleListItemList = (
            <Card
                padding={'24'}
                max
                data-testid={'ArticleListItem'}
                className={classNames(cls.articleListItemRedesigned, {}, [
                    className,
                    cls[view],
                ])}
            >
                <VStack max gap={'8'}>
                    <HStack max gap={'8'}>
                        <Avatar src={article.user.avatar} size={32} />
                        <Text bold text={article.user.username} />
                        <Text text={article.createdAt} />
                    </HStack>
                    <Text title={article.title} bold />
                    <Text title={article.subtitle} size={'s'} />
                    <Text title={article.type.join(', ')} bold size={'s'} />
                    <AppImage
                        fallback={<Skeleton width={'100%'} height={250} />}
                        src={article.img}
                        alt={article.title}
                        className={cls.image}
                    />
                    {textBlock?.paragraphs && (
                        <Text
                            text={textBlock.paragraphs.slice(0, 2).join(' ')}
                            className={cls.textBlock}
                        />
                    )}
                    <HStack max justify={'between'}>
                        <AppLink
                            target={target}
                            to={RoutePaths.getRouteArticleDetails(article.id)}
                        >
                            <Button variant={'outline'}>
                                {t('Read more...')}
                            </Button>
                        </AppLink>
                        <HStack gap={'8'}>
                            <Icon Svg={ViewsIcon} />
                            <Text
                                text={article.views.toString()}
                                className={cls.views}
                            />
                        </HStack>
                    </HStack>
                </VStack>
            </Card>
        );

        if (view === ArticleView.SHELF) {
            return (
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={RedesignedArticleListItemShelf}
                    off={DeprecatedArticleListItemShelf}
                />
            );
        }

        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={RedesignedArticleListItemList}
                off={DeprecatedArticleListItemList}
            />
        );
    },
);

export default ArticleListItem;
