import React, {JSX, memo} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './ArticlePage.module.scss';
import {useTranslation} from 'react-i18next';

interface IArticlePageProps {
    className?: string
}

const ArticlePage: React.FC<IArticlePageProps> = memo(({className}: IArticlePageProps): JSX.Element => {
    const {t} = useTranslation('article');

    return (
        <div className={classNames(cls.article, {}, [className])}>
            ArticlePage
        </div>
    );
});

export default ArticlePage;


