import React, {JSX} from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './ArticleEditPage.module.scss';
import Page from '@/shared/ui/Page';
import {useParams} from 'react-router-dom';
import {Text} from '@/shared/ui/Text';
import {useTranslation} from 'react-i18next';

interface IArticleEditPageProps {
    className?: string
}

const ArticleEditPage: React.FC<IArticleEditPageProps> = ({className}: IArticleEditPageProps): JSX.Element => {
    const {t} = useTranslation('article');

    const {id} = useParams<{id: string}>();

    if (id) {
        return (
            <Page className={classNames(cls.articleEditPage, {}, [className])}>
                <Text title={t('Edit article')}/>
            </Page>
        );
    }

    return (
        <Page className={classNames(cls.articleEditPage, {}, [className])}>
            <Text title={t('Creating new Article')}/>
        </Page>
    );
};

export default ArticleEditPage;


