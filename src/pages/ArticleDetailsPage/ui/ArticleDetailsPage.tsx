import React, {JSX, memo} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import {useTranslation} from 'react-i18next';
import {ArticleDetails} from 'entities/Article/model';
import {useParams} from 'react-router-dom';
import NotFoundPage from 'pages/NotFoundPage';

interface IArticleDetailsPageProps {
    className?: string
}

const ArticleDetailsPage: React.FC<IArticleDetailsPageProps> = memo(({className}: IArticleDetailsPageProps): JSX.Element => {
    const {t} = useTranslation('article');

    const {id} = useParams<string>();

    if (!id) {
        return (
            <NotFoundPage/>
        );
    }

    return (
        <div className={classNames(cls.article, {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
});

export default ArticleDetailsPage;


