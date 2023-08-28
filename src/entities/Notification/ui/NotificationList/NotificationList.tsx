import React, { JSX } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import { VStack } from '@/shared/ui/redesigned/Stack';
import INotification from '../../model/types/INotification';
import NotificationItem from '../../ui/NotificationItem/NotificationItem';
import { default as DeprecatedSkeleton } from '@/shared/ui/deprecated/Skeleton';
import useNotifications from '../../api/notificationApi';
import { ToggleFeatures } from '@/shared/features';
import Skeleton from '@/shared/ui/redesigned/Skeleton';

interface INotificationListProps {
    className?: string;
}

const NotificationList: React.FC<INotificationListProps> = ({
    className,
}: INotificationListProps): JSX.Element => {
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 5000,
    });

    const DeprecatedNotificationListLoader = (
        <VStack gap={'16'} max className={classNames('', {}, [className])}>
            <DeprecatedSkeleton
                width={'100%'}
                borderRadius={'8px'}
                height={'80px'}
            />
            <DeprecatedSkeleton
                width={'100%'}
                borderRadius={'8px'}
                height={'80px'}
            />
            <DeprecatedSkeleton
                width={'100%'}
                borderRadius={'8px'}
                height={'80px'}
            />
        </VStack>
    );

    const RedesignedNotificationListLoader = (
        <VStack gap={'16'} max className={classNames('', {}, [className])}>
            <Skeleton width={'100%'} borderRadius={'8px'} height={'80px'} />
            <Skeleton width={'100%'} borderRadius={'8px'} height={'80px'} />
            <Skeleton width={'100%'} borderRadius={'8px'} height={'80px'} />
        </VStack>
    );

    if (isLoading) {
        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                on={RedesignedNotificationListLoader}
                off={DeprecatedNotificationListLoader}
            />
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
