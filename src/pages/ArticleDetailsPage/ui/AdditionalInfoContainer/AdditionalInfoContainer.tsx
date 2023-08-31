import React, { JSX, useCallback } from 'react';
import ArticleAdditionalInfo from '@/widgets/ArticleAdditionalInfo';
import { Card } from '@/shared/ui/redesigned/Card';
import { useSelector } from 'react-redux';
import { ArticleSelectors } from '@/entities/Article';
import cls from './AdditionalInfoContainer.module.scss';
import { useNavigate } from 'react-router-dom';
import { RoutePaths } from '@/shared/consts/routerPaths';

interface IAdditionalInfoContainerProps {
    className?: string;
}

const AdditionalInfoContainer: React.FC<IAdditionalInfoContainerProps> = ({
    className,
}: IAdditionalInfoContainerProps): JSX.Element | null => {
    const article = useSelector(ArticleSelectors.getArticleData);

    const navigate = useNavigate();
    const onEditArticle = useCallback(() => {
        if (article?.id) {
            navigate(RoutePaths.getRouteArticleEdit(article!.id));
        }
    }, [article, navigate]);

    if (!article) {
        return null;
    }

    return (
        <Card className={cls.card} padding={'24'} border={'round'}>
            <ArticleAdditionalInfo
                onEdit={onEditArticle}
                createdAt={article.createdAt}
                author={article.user}
                views={article.views}
                className={className}
            />
        </Card>
    );
};

export default AdditionalInfoContainer;
