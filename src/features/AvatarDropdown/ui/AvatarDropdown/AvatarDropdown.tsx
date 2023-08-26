import React, { JSX, useCallback } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import { Dropdown } from '@/shared/ui/deprecated/Popups';
import { useDispatch, useSelector } from 'react-redux';
import { UserSelectors, userActions } from '@/entities/User';
import { useTranslation } from 'react-i18next';
import Button from '@/shared/ui/deprecated/Button';
import ThemeButton from '@/shared/ui/deprecated/Button/consts/ThemeButton';
import { RoutePaths } from '@/shared/consts/routerPaths';
import Avatar from '@/shared/ui/deprecated/Avatar';

interface IAvatarDropdownProps {
    className?: string;
}

const AvatarDropdown: React.FC<IAvatarDropdownProps> = ({
    className,
}: IAvatarDropdownProps): JSX.Element | null => {
    const { t } = useTranslation('auth');

    const isAdmin = useSelector(UserSelectors.isUserAdmin);
    const isManager = useSelector(UserSelectors.isUserManager);
    const authData = useSelector(UserSelectors.getUserAuthData);

    const dispatch = useDispatch();

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!authData) {
        return null;
    }

    return (
        <Dropdown
            className={classNames('', {}, [className])}
            direction={'bottom left'}
            items={[
                ...(isAdmin || isManager
                    ? [
                          {
                              disabled: true,
                              content: t('Admin Panel'),
                              href: RoutePaths.getRouteAdminPanel(),
                          },
                      ]
                    : []),
                {
                    content: t('Profile'),
                    href: RoutePaths.getRouteProfile(authData.id),
                },
                {
                    content: t('Logout'),
                    onClick: onLogout,
                },
            ]}
            trigger={
                <Button theme={ThemeButton.CLEAR}>
                    <Avatar fallbackUInverted size={30} src={authData.avatar} />
                </Button>
            }
        />
    );
};

export default AvatarDropdown;
