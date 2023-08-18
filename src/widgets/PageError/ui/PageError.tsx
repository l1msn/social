import React, { JSX, memo } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './PageError.module.scss';
import { useTranslation } from 'react-i18next';
import Button from '@/shared/ui/Button';

interface IPageErrorProps {
    className?: string;
}

const PageError: React.FC<IPageErrorProps> = memo(
    ({ className }: IPageErrorProps): JSX.Element => {
        const { t } = useTranslation();

        function reloadPage(): void {
            location.reload();
        }

        return (
            <div className={classNames(cls.PageError, {}, [className])}>
                <p>{t('Unknown error!')}</p>
                <Button onClick={reloadPage}>{t('Reload page')}</Button>
            </div>
        );
    },
);

export default PageError;
