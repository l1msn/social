import React, {JSX, useCallback} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import ThemeButton from 'shared/ui/Button/consts/ThemeButton';
import Button from 'shared/ui/Button';
import {useTranslation} from 'react-i18next';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getArticleData} from 'entities/Article';
import getCanEditArticle from '../../model/selectors/getCanEditArticle/getCanEditArticle';
import {HStack} from 'widgets/Stack';

interface IArticleDetailsPageHeaderProps {
    className?: string
}

const ArticleDetailsPageHeader: React.FC<IArticleDetailsPageHeaderProps> = ({className}: IArticleDetailsPageHeaderProps): JSX.Element => {
    const navigate = useNavigate();

    const {t} = useTranslation('article');

    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleData);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(RoutePath.articles_details + article?.id + '/edit');
    }, [article?.id, navigate]);

    return (
        <HStack max justify={'between'} className={classNames('', {}, [className])}>
            <Button theme={ThemeButton.WITHLINE} onClick={onBackToList}>
                {t('Back to list')}
            </Button>
            {canEdit && <Button theme={ThemeButton.WITHLINE} onClick={onEditArticle}>
                {t('Edit')}
            </Button>
            }
        </HStack>
    );
};

export default ArticleDetailsPageHeader;


