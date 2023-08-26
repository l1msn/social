import React, { JSX, useCallback, useState } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './NotificationButton.module.scss';
import Button from '@/shared/ui/deprecated/Button';
import ThemeButton from '@/shared/ui/deprecated/Button/consts/ThemeButton';
import Icon from '@/shared/ui/deprecated/Icon';
import NotificationIcon from '@/shared/assets/icons/deprecated/notification-icon.svg';
import { NotificationList } from '@/entities/Notification';
import { Drawer, Popover } from '@/shared/ui/deprecated/Popups';
import { BrowserView, MobileView } from 'react-device-detect';

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

    const trigger = (
        <Button onClick={onToggleDrawer} theme={ThemeButton.CLEAR}>
            <Icon className={cls.icon} Svg={NotificationIcon} />
        </Button>
    );

    return (
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
};

export default NotificationButton;
