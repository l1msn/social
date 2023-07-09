import React, {JSX, useCallback, useState} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import {useTranslation} from 'react-i18next';
import Button from 'shared/ui/Button';
import ThemeButton from 'shared/ui/Button/consts/ThemeButton';
import {LoginModal} from 'features/AuthByUsername';
import {useDispatch, useSelector} from 'react-redux';
import {getUserAuthData, userActions} from 'entities/User';

interface INavbarProps {
    className?: string
}

const Navbar: React.FC<INavbarProps> = ({className}: INavbarProps): JSX.Element => {
    const {t} = useTranslation('auth');
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prevState) => !prevState);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    if (authData) {
        return (<div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ThemeButton.WITHLINE}
                className={cls.links}
                onClick={onLogout}
            >
                {t('Logout')}
            </Button>
            <LoginModal
                isOpen={isAuthModal}
                onClose={onToggleModal}
            ></LoginModal>
        </div>);
    }

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ThemeButton.WITHLINE}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Enter')}
            </Button>
            <LoginModal
                isOpen={isAuthModal}
                onClose={onToggleModal}
            ></LoginModal>
        </div>
    );
};

export default Navbar;


