import React, { JSX } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/deprecated/Stack';
import INotification from '../../model/types/INotification';
import NotificationItem from '../../ui/NotificationItem/NotificationItem';
import Skeleton from '@/shared/ui/deprecated/Skeleton';
import useNotifications from '../../api/notificationApi';

interface INotificationListProps {
    className?: string;
}

const NotificationList: React.FC<INotificationListProps> = ({
    className,
}: INotificationListProps): JSX.Element => {
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 5000,
    });

    if (isLoading) {
        return (
            <VStack gap={'16'} max className={classNames('', {}, [className])}>
                <Skeleton width={'100%'} borderRadius={'8px'} height={'80px'} />
                <Skeleton width={'100%'} borderRadius={'8px'} height={'80px'} />
                <Skeleton width={'100%'} borderRadius={'8px'} height={'80px'} />
            </VStack>
        );
    }

    return (
        <VStack gap={'16'} className={classNames('', {}, [className])}>
            {data?.map((item: INotification) => (
                <NotificationItem key={item.id} item={item} />
            ))}
        </VStack>
    );
};

export default NotificationList;
