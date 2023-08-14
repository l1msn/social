import React, {JSX} from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './NotificationItem.module.scss';
import INotification from '../../model/types/INotification';
import {Card, CardTheme} from '@/shared/ui/Card';
import {Text} from '@/shared/ui/Text';
import AppLink from '@/shared/ui/AppLink';

interface INotificationItemProps {
    className?: string,
    item: INotification;
}

const NotificationItem: React.FC<INotificationItemProps> = ({className, item}: INotificationItemProps): JSX.Element => {
    const content = (
        <Card theme={CardTheme.OUTLINE} className={classNames(cls.notificationItem, {}, [className])}>
            <Text title={item.title} text={item.description}/>
        </Card>
    );

    if (item.href) {
        return (
            <AppLink className={cls.link} to={item.href} target={'_blank'}>
                {content}
            </AppLink>
        );
    }

    return content;
};

export default NotificationItem;


