import React, {JSX, Suspense} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './LoginModal.module.scss';
import Modal from 'widgets/Modal';
import LoginFormLazy from '../LoginForm/LoginForm.lazy';
import Loader from 'widgets/Loader';

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
            <Suspense fallback={<Loader/>}>
                <LoginFormLazy onSuccess={onClose}/>
            </Suspense>
        </Modal>
    );
};

export default LoginModal;


