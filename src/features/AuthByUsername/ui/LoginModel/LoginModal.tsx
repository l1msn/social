import React, {JSX} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './LoginModal.module.scss';
import LoginForm from '../LoginForm/LoginForm';
import Modal from 'widgets/Modal';

interface ILoginModalProps {
    className?: string,
    isOpen: boolean,
    onClose: () => void;
}

const LoginModal: React.FC<ILoginModalProps> = ({className, isOpen, onClose}: ILoginModalProps): JSX.Element => {
    return (
        <Modal
            className={classNames(cls.login_modal, {}, [className])}
            isOpen={isOpen}
            onClose={onClose}
            lazy
        >
            <LoginForm/>
        </Modal>
    );
};

export default LoginModal;


