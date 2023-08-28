import React, { JSX, useCallback } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import { Dropdown as DeprecatedDropdown } from '@/shared/ui/deprecated/Popups';
import { useDispatch, useSelector } from 'react-redux';
import { UserSelectors, userActions } from '@/entities/User';
import { useTranslation } from 'react-i18next';
import { default as DeprecatedButton } from '@/shared/ui/deprecated/Button';
import ThemeButton from '@/shared/ui/deprecated/Button/consts/ThemeButton';
import { RoutePaths } from '@/shared/consts/routerPaths';
import { default as DeprecatedAvatar } from '@/shared/ui/deprecated/Avatar';
import { ToggleFeatures } from '@/shared/features';
import { Dropdown } from '@/shared/ui/redesigned/Popups';
import Avatar from '@/shared/ui/redesigned/Avatar';

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

    const itemsDropwdown = [
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
            content: t('Settings'),
            href: RoutePaths.getRouteSettings(),
        },
        {
            content: t('Logout'),
            onClick: onLogout,
        },
    ];

    const DeprecatedAvatarDropdown = (
        <DeprecatedDropdown
            className={classNames('', {}, [className])}
            direction={'bottom left'}
            items={itemsDropwdown}
            trigger={
                <DeprecatedButton theme={ThemeButton.CLEAR}>
                    <DeprecatedAvatar
                        fallbackUInverted
                        size={30}
                        src={authData.avatar}
                    />
                </DeprecatedButton>
            }
        />
    );

    const RedesignedAvatarDropdown = (
        <Dropdown
            className={classNames('', {}, [className])}
            direction={'bottom left'}
            items={itemsDropwdown}
            trigger={<Avatar size={40} src={authData.avatar} />}
        />
    );

    return (
        <ToggleFeatures
            feature={'isAppRedesigned'}
            on={RedesignedAvatarDropdown}
            off={DeprecatedAvatarDropdown}
        />
    );
};

export default AvatarDropdown;
