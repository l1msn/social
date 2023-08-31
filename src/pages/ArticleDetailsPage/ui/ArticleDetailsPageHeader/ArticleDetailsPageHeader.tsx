import React, { JSX, useCallback } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import ThemeButton from '@/shared/ui/deprecated/Button/consts/ThemeButton';
import Button from '@/shared/ui/deprecated/Button';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ArticleDetailsSelectors from '../../model/selectors/ArticleDetailsSelectors';
import { ArticleSelectors } from '@/entities/Article';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { RoutePaths } from '@/shared/consts/routerPaths';

interface IArticleDetailsPageHeaderProps {
    className?: string;
}

const ArticleDetailsPageHeader: React.FC<IArticleDetailsPageHeaderProps> = ({
    className,
}: IArticleDetailsPageHeaderProps): JSX.Element => {
    const navigate = useNavigate();

    const { t } = useTranslation('article');

    const canEdit = useSelector(ArticleDetailsSelectors.getCanEditArticle);
    const article = useSelector(ArticleSelectors.getArticleData);

    const onBackToList = useCallback(() => {
        navigate(RoutePaths.getRouteArticles());
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        if (article?.id) {
            navigate(RoutePaths.getRouteArticleEdit(article!.id));
        }
    }, [article, navigate]);

    return (
        <HStack
            max
            justify={'between'}
            className={classNames('', {}, [className])}
        >
            <Button theme={ThemeButton.WITHLINE} onClick={onBackToList}>
                {t('Back to list')}
            </Button>
            {canEdit && (
                <Button theme={ThemeButton.WITHLINE} onClick={onEditArticle}>
                    {t('Edit')}
                </Button>
            )}
        </HStack>
    );
};

export default ArticleDetailsPageHeader;
