import React, {JSX, useCallback} from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import {Dropdown} from '@/shared/ui/Popups';
import {useDispatch, useSelector} from 'react-redux';
import {getUserAuthData, isUserAdmin, isUserManager, userActions} from '@/entities/User';
import {useTranslation} from 'react-i18next';
import Button from '@/shared/ui/Button';
import ThemeButton from '@/shared/ui/Button/consts/ThemeButton';
import {RoutePath} from '@/shared/consts/routerPaths';
import Avatar from '@/shared/ui/Avatar';

interface IAvatarDropdownProps {
    className?: string
}

const AvatarDropdown: React.FC<IAvatarDropdownProps> = ({className}: IAvatarDropdownProps): JSX.Element | null => {
    const {t} = useTranslation('auth');

    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (!authData) {
        return null;
    }

    return (
        <Dropdown className={classNames('', {}, [className])}
            direction={'bottom left'} items={[
                ...(isAdmin || isManager ? [{
                    content: t('Admin Panel'),
                    href: RoutePath.admin_panel,
                }] : []),
                {
                    content: t('Profile'),
                    href: RoutePath.profile + authData.id,
                },
                {
                    content: t('Logout'),
                    onClick: onLogout,
                },
            ]}
            trigger={
                <Button theme={ThemeButton.CLEAR}>
                    <Avatar size={30} src={authData.avatar} />
                </Button>
            }
        />
    );
};

export default AvatarDropdown;


