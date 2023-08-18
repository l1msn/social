import React, { JSX } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';
import Page from '@/widgets/Page';

interface INotFoundPageProps {
    className?: string;
}

const NotFoundPage: React.FC<INotFoundPageProps> = ({
    className,
}: INotFoundPageProps): JSX.Element => {
    const { t } = useTranslation();
    return (
        <Page
            data-testid={'NotFoundPage'}
            className={classNames(cls.NotFoundPage, {}, [className])}
        >
            {t('Not found page')}
        </Page>
    );
};

export default NotFoundPage;
