import React, { JSX, Suspense } from 'react';
import { Modal } from '@/shared/ui/redesigned/Modal';
import LoginFormLazy from '../LoginForm/LoginForm.lazy';
import Loader from '@/shared/ui/deprecated/Loader';
import { isMobile } from 'react-device-detect';
import { Drawer } from '@/shared/ui/deprecated/Popups';

interface ILoginModalProps {
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

const LoginModal: React.FC<ILoginModalProps> = ({
    className,
    isOpen,
    onClose,
}: ILoginModalProps): JSX.Element => {
    const content = (
        <Suspense fallback={<Loader />}>
            <LoginFormLazy onSuccess={onClose} />
        </Suspense>
    );

    if (isMobile) {
        return (
            <Drawer isOpen={isOpen} onClose={onClose} lazy>
                {content}
            </Drawer>
        );
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} lazy>
            {content}
        </Modal>
    );
};

export default LoginModal;
