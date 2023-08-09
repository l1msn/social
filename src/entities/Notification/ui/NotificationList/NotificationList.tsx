import React, {JSX} from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import useNotifications from '@/entities/Notification/api/notificationApi';
import {VStack} from '@/widgets/Stack';
import INotification from '../../model/types/INotification';
import NotificationItem from '../../ui/NotificationItem/NotificationItem';
import Skeleton from '@/widgets/Skeleton';

interface INotificationListProps {
    className?: string
}

const NotificationList: React.FC<INotificationListProps> = ({className}: INotificationListProps): JSX.Element => {
    const {data, isLoading} = useNotifications(null, {
        pollingInterval: 5000,
    });

    if (isLoading) {
        return (
            <VStack gap={'16'} max className={classNames('', {}, [className])}>
                <Skeleton width={'100%'} borderRadius={'8px'} height={'80px'}/>
                <Skeleton width={'100%'} borderRadius={'8px'} height={'80px'}/>
                <Skeleton width={'100%'} borderRadius={'8px'} height={'80px'}/>
            </VStack>
        );
    }

    return (
        <VStack gap={'16'} max className={classNames('', {}, [className])}>
            {data?.map((item: INotification) => (
                <NotificationItem key={item.id} item={item}/>
            ))}
        </VStack>
    );
};

export default NotificationList;


