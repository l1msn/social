import React, {JSX, memo, useCallback, useState} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import {useTranslation} from 'react-i18next';
import Button from 'shared/ui/Button';
import ThemeButton from 'shared/ui/Button/consts/ThemeButton';
import {LoginModal} from 'features/AuthByUsername';
import {useDispatch, useSelector} from 'react-redux';
import {getUserAuthData, isUserAdmin, isUserManager, userActions} from 'entities/User';
import {Text, ThemeText} from 'shared/ui/Text';
import AppLink from 'shared/ui/AppLink';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import AppLinkThemes from 'shared/ui/AppLink/consts/AppLinkThemes';
import Dropdown from 'shared/ui/Dropdown';
import Avatar from 'widgets/Avatar';

interface INavbarProps {
    className?: string
}

const Navbar: React.FC<INavbarProps> = memo(({className}: INavbarProps): JSX.Element => {
    const {t} = useTranslation('auth');
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prevState) => !prevState);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (
            <header className={classNames(cls.navbar, {}, [className])}>
                <AppLink to={RoutePath.main}>
                    <Text theme={ThemeText.INVERTED} title={'Social'} className={cls.appName}/>
                </AppLink>
                <AppLink theme={AppLinkThemes.SECONDARY} to={RoutePath.articles_create}>
                    {t('Create new article')}
                </AppLink>
                <Dropdown direction={'bottom left'}
                    className={cls.dropdown} items={[
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
                    trigger={<Avatar size={30} src={authData.avatar} />}
                />
            </header>
        );
    }

    return (
        <header className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ThemeButton.CLEAR}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Enter')}
            </Button>
            {isAuthModal && <LoginModal
                isOpen={isAuthModal}
                onClose={onToggleModal}
            ></LoginModal>
            }
        </header>
    );
});

export default Navbar;


