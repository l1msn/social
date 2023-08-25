import React, { JSX, memo, useCallback, useState } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import Button from '@/shared/ui/Button';
import ThemeButton from '@/shared/ui/Button/consts/ThemeButton';
import { LoginModal } from '@/features/AuthByUsername';
import { useSelector } from 'react-redux';
import { UserSelectors } from '@/entities/User';
import { Text, ThemeText } from '@/shared/ui/Text';
import AppLink from '@/shared/ui/AppLink';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { HStack } from '@/shared/ui/Stack';
import { RoutePaths } from '@/shared/consts/routerPaths';
import { ToggleFeatures } from '@/shared/features';

interface INavbarProps {
    className?: string;
}

const Navbar: React.FC<INavbarProps> = memo(
    ({ className }: INavbarProps): JSX.Element => {
        const { t } = useTranslation('auth');

        const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

        const authData = useSelector(UserSelectors.getUserAuthData);

        const onToggleModal = useCallback(() => {
            setIsAuthModal((prevState) => !prevState);
        }, []);

        const DeprecatedNavbar = (
            <header className={classNames(cls.navbar, {}, [className])}>
                <AppLink to={RoutePaths.getRouteMain()}>
                    <Text
                        theme={ThemeText.INVERTED}
                        title={'Social'}
                        className={cls.appName}
                    />
                </AppLink>
                {/* <AppLink theme={AppLinkThemes.SECONDARY} to={RoutePaths.getRouteArticleCreate()}>*/}
                {/*    {t('Create new article')}*/}
                {/* </AppLink>*/}
                <HStack gap={'16'} className={cls.actions}>
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
            </header>
        );

        const RedesignedNavbar = (
            <header
                className={classNames(cls.navbarRedesigned, {}, [className])}
            >
                <AppLink to={RoutePaths.getRouteMain()}>
                    {/* <Text*/}
                    {/*    theme={ThemeText.INVERTED}*/}
                    {/*    title={'Social'}*/}
                    {/*    className={cls.appName}*/}
                    {/* />*/}
                </AppLink>
                {/* <AppLink theme={AppLinkThemes.SECONDARY} to={RoutePaths.getRouteArticleCreate()}>*/}
                {/*    {t('Create new article')}*/}
                {/* </AppLink>*/}
                <HStack gap={'16'} className={cls.actions}>
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
            </header>
        );

        if (authData) {
            return (
                <ToggleFeatures
                    feature={'isAppRedesigned'}
                    on={RedesignedNavbar}
                    off={DeprecatedNavbar}
                />
            );
        }

        return (
            <header className={classNames(cls.navbar, {}, [className])}>
                <AppLink to={RoutePaths.getRouteMain()}>
                    <Text
                        theme={ThemeText.INVERTED}
                        title={'Social'}
                        className={cls.appName}
                    />
                </AppLink>
                <Button
                    theme={ThemeButton.CLEAR}
                    className={cls.links}
                    onClick={onToggleModal}
                >
                    {t('Enter')}
                </Button>
                {isAuthModal && (
                    <LoginModal
                        isOpen={isAuthModal}
                        onClose={onToggleModal}
                    ></LoginModal>
                )}
            </header>
        );
    },
);

export default Navbar;
