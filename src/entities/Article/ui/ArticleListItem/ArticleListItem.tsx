import React, {HTMLAttributeAnchorTarget, JSX, memo} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import {ArticleBlockType, IArticle, IArticleTextBlock} from '../../model/types/IArticle';
import ArticleView from '../../model/types/ArticleView';
import {Text} from 'shared/ui/Text';
import Icon from 'widgets/Icon';
import ViewsIcon from 'shared/assets/icons/views-icon.svg';
import {Card} from 'widgets/Card';
import Avatar from 'widgets/Avatar';
import Button from 'shared/ui/Button';
import ThemeButton from 'shared/ui/Button/consts/ThemeButton';
import {useTranslation} from 'react-i18next';
import ArticleText from '../ArticleText/ArticleText';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import AppLink from 'shared/ui/AppLink';

interface IArticleListItemProps {
    className?: string
    article: IArticle;
    view: ArticleView,
    target?: HTMLAttributeAnchorTarget;
}


const ArticleListItem: React.FC<IArticleListItemProps> = memo((props: IArticleListItemProps): JSX.Element => {
    const {className, article, view, target} = props;

    const {t} = useTranslation('article');

    const textBlock = article.blocks.find(
        (block) => block.type === ArticleBlockType.TEXT) as IArticleTextBlock;


    if (view === ArticleView.SHELF) {
        return (
            <AppLink
                target={target}
                className={classNames(cls.articleListItem, {}, [className, cls[view]])}
                to={RoutePath.articles_details + article.id}>
                <Card className={cls.card}>
                    <div className={cls.imageWrapper}>
                        <img src={article.img} alt={article.title} className={cls.image}/>
                        <Text text={article.createAt} className={cls.date}/>
                    </div>
                    <div className={cls.infoWrapper}>
                        <Text text={article.type.join(', ')} className={cls.types}/>
                        <Text text={article.views.toString()} className={cls.views}/>
                        <Icon Svg={ViewsIcon}/>
                    </div>
                    <Text text={article.title} className={cls.title}/>
                </Card>
            </AppLink>
        );
    }

    return (
        <div className={classNames(cls.articleListItem, {}, [className, cls[view]])} >
            <Card className={cls.card}>
                <div className={cls.header}>
                    <Avatar src={article.user.avatar} size={30}/>
                    <Text text={article.user.username} className={cls.username}/>
                    <Text text={article.createAt} className={cls.date}/>
                </div>
                <Text text={article.title} className={cls.title}/>
                <Text text={article.type.join(', ')} className={cls.types}/>
                <img src={article.img} alt={article.title} className={cls.image}/>
                {textBlock && (
                    <ArticleText block={textBlock} className={cls.textBlock}/>
                )}
                <div className={cls.footer}>
                    <AppLink target={target} to={RoutePath.articles_details + article.id}>
                        <Button theme={ThemeButton.CLEAR}>
                            {t('Read more...')}
                        </Button>
                    </AppLink>
                    <Text text={article.views.toString()} className={cls.views}/>
                    <Icon Svg={ViewsIcon}/>
                </div>
            </Card>
        </div>
    );
});

export default ArticleListItem;


