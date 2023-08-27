import React, { JSX, useCallback, useState } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';
import { default as DeprecatedButton } from '@/shared/ui/deprecated/Button';
import ThemeButton from '@/shared/ui/deprecated/Button/consts/ThemeButton';
import { default as DeprecatedIcon } from '@/shared/ui/deprecated/Icon';
import NotificationIconDeprecated from '@/shared/assets/icons/deprecated/notification-icon.svg';
import NotificationIcon from '@/shared/assets/icons/redesigned/notification.svg';
import { NotificationList } from '@/entities/Notification';
import {
    Drawer as DeprecatedDrawer,
    Popover as DeprecatedPopover,
} from '@/shared/ui/deprecated/Popups';
import { BrowserView, MobileView } from 'react-device-detect';
import { ToggleFeatures } from '@/shared/features';
import { Drawer, Popover } from '@/shared/ui/redesigned/Popups';
import Icon from '@/shared/ui/redesigned/Icon';

interface INotificationButtonProps {
    className?: string;
}

const NotificationButton: React.FC<INotificationButtonProps> = ({
    className,
}: INotificationButtonProps): JSX.Element => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onToggleDrawer = useCallback(() => {
        setIsOpen((prevState) => !prevState);
    }, []);

    const DeprecatedTrigger = (
        <DeprecatedButton onClick={onToggleDrawer} theme={ThemeButton.CLEAR}>
            <DeprecatedIcon
                className={cls.icon}
                Svg={NotificationIconDeprecated}
            />
        </DeprecatedButton>
    );

    const RedesignedTrigger = (
        <Icon clickable onClick={onToggleDrawer} Svg={NotificationIcon} />
    );

    const trigger = (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={RedesignedTrigger}
            off={DeprecatedTrigger}
        />
    );

    const DeprecatedNotificationButton = (
        <div>
            <BrowserView>
                <DeprecatedPopover
                    className={classNames(cls.notificationButton, {}, [
                        className,
                    ])}
                    direction={'bottom left'}
                    trigger={trigger}
                >
                    <NotificationList className={cls.notificationList} />
                </DeprecatedPopover>
            </BrowserView>
            <MobileView>
                {trigger}
                <DeprecatedDrawer isOpen={isOpen} onClose={onToggleDrawer}>
                    <NotificationList />
                </DeprecatedDrawer>
            </MobileView>
        </div>
    );

    const RedesignedNotificationButton = (
        <div>
            <BrowserView>
                <Popover
                    className={classNames(cls.notificationButton, {}, [
                        className,
                    ])}
                    direction={'bottom left'}
                    trigger={trigger}
                >
                    <NotificationList className={cls.notificationList} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpen} onClose={onToggleDrawer}>
                    <NotificationList />
                </Drawer>
            </MobileView>
        </div>
    );

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={RedesignedNotificationButton}
            off={DeprecatedNotificationButton}
        />
    );
};

export default NotificationButton;
