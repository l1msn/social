import React, {JSX, useCallback, useState} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import {useTranslation} from 'react-i18next';
import Button from 'shared/ui/Button';
import ThemeButton from 'shared/ui/Button/consts/ThemeButton';
import Modal from 'widgets/Modal';

interface INavbarProps {
    className?: string
}

const Navbar: React.FC<INavbarProps> = ({className}: INavbarProps): JSX.Element => {
    const {t} = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prevState) => !prevState);
    }, []);

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button
                theme={ThemeButton.WITHLINE}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Enter')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>here!</Modal>
        </div>
    );
};

export default Navbar;


