import React, { JSX, memo, useCallback, useState } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';
import { default as DeprecatedButton } from '@/shared/ui/deprecated/Button';
import ThemeButton from '@/shared/ui/deprecated/Button/consts/ThemeButton';
import { LoginModal } from '@/features/AuthByUsername';
import { useSelector } from 'react-redux';
import { UserSelectors } from '@/entities/User';
import { Text as DeprecatedText, ThemeText } from '@/shared/ui/deprecated/Text';
import { default as DeprecatedAppLink } from '@/shared/ui/deprecated/AppLink';
import { NotificationButton } from '@/features/NotificationButton';
import { AvatarDropdown } from '@/features/AvatarDropdown';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { RoutePaths } from '@/shared/consts/routerPaths';
import { ToggleFeatures } from '@/shared/features';
import AppLink from '@/shared/ui/redesigned/AppLink';
import Button from '@/shared/ui/redesigned/Button';

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

        const DeprecatedNavbarWithAuth = (
            <header className={classNames(cls.navbar, {}, [className])}>
                <DeprecatedAppLink to={RoutePaths.getRouteMain()}>
                    <DeprecatedText
                        theme={ThemeText.INVERTED}
                        title={'Social'}
                        className={cls.appName}
                    />
                </DeprecatedAppLink>
                {/* <AppLink theme={AppLinkThemes.SECONDARY} to={RoutePaths.getRouteArticleCreate()}>*/}
                {/*    {t('Create new article')}*/}
                {/* </AppLink>*/}
                <HStack gap={'16'} className={cls.actions}>
                    <NotificationButton />
                    <AvatarDropdown />
                </HStack>
            </header>
        );

        const RedesignedNavbarWithAuth = (
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
                    on={RedesignedNavbarWithAuth}
                    off={DeprecatedNavbarWithAuth}
                />
            );
        }

        const DeprecatedNavbar = (
            <header className={classNames(cls.navbar, {}, [className])}>
                <DeprecatedAppLink to={RoutePaths.getRouteMain()}>
                    <DeprecatedText
                        theme={ThemeText.INVERTED}
                        title={'Social'}
                        className={cls.appName}
                    />
                </DeprecatedAppLink>
                <DeprecatedButton
                    theme={ThemeButton.CLEAR}
                    className={cls.links}
                    onClick={onToggleModal}
                >
                    {t('Enter')}
                </DeprecatedButton>
                {isAuthModal && (
                    <LoginModal
                        isOpen={isAuthModal}
                        onClose={onToggleModal}
                    ></LoginModal>
                )}
            </header>
        );

        const RedesignedNavbar = (
            <header
                className={classNames(cls.navbarRedesigned, {}, [className])}
            >
                <Button
                    variant={'accept'}
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

        return (
            <ToggleFeatures
                feature={'isAppRedesigned'}
                off={DeprecatedNavbar}
                on={RedesignedNavbar}
            />
        );
    },
);

export default Navbar;
