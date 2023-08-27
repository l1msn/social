import React, { JSX } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './NotificationItem.module.scss';
import INotification from '../../model/types/INotification';
import {
    Card as DeprecatedCard,
    CardTheme as DeprecatedCardTheme,
} from '@/shared/ui/deprecated/Card';
import { Text as DeprecatedText } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { default as DeprecatedAppLink } from '@/shared/ui/deprecated/AppLink';
import { ToggleFeatures } from '@/shared/features';
import { Card } from '@/shared/ui/redesigned/Card';
import AppLink from '@/shared/ui/redesigned/AppLink';

interface INotificationItemProps {
    className?: string;
    item: INotification;
}

const NotificationItem: React.FC<INotificationItemProps> = ({
    className,
    item,
}: INotificationItemProps): JSX.Element => {
    const DeprecatedContent = (
        <DeprecatedCard
            theme={DeprecatedCardTheme.OUTLINE}
            className={classNames(cls.notificationItem, {}, [className])}
        >
            <DeprecatedText title={item.title} text={item.description} />
        </DeprecatedCard>
    );

    const RedesignedContent = (
        <Card className={classNames(cls.notificationItem, {}, [className])}>
            <Text title={item.title} text={item.description} />
        </Card>
    );

    const content = (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={RedesignedContent}
            off={DeprecatedContent}
        />
    );

    if (item.href) {
        const DeprecatedHref = (
            <DeprecatedAppLink
                className={cls.link}
                to={item.href}
                target={'_blank'}
            >
                {content}
            </DeprecatedAppLink>
        );

        const RedesignedHref = (
            <AppLink className={cls.link} to={item.href} target={'_blank'}>
                {content}
            </AppLink>
        );

        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={RedesignedHref}
                off={DeprecatedHref}
            />
        );
    }

    return content;
};

export default NotificationItem;
