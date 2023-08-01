import React, {JSX, useCallback} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPageHeader.module.scss';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import ThemeButton from 'shared/ui/Button/consts/ThemeButton';
import Button from 'shared/ui/Button';
import {useTranslation} from 'react-i18next';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getUserAuthData} from 'entities/User';
import {getArticleData} from 'entities/Article';

interface IArticleDetailsPageHeaderProps {
    className?: string
}

const ArticleDetailsPageHeader: React.FC<IArticleDetailsPageHeaderProps> = ({className}: IArticleDetailsPageHeaderProps): JSX.Element => {
    const navigate = useNavigate();

    const {t} = useTranslation('article');

    const userData = useSelector(getUserAuthData);
    const article = useSelector(getArticleData);

    const onBackToList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    return (
        <div className={classNames(cls.articleDetailsPageHeader, {}, [className])}>
            <Button theme={ThemeButton.WITHLINE} onClick={onBackToList}>
                {t('Back to list')}
            </Button>
            <Button className={cls.editBtn} theme={ThemeButton.WITHLINE} onClick={onBackToList}>
                {t('Edit')}
            </Button>
        </div>
    );
};

export default ArticleDetailsPageHeader;


