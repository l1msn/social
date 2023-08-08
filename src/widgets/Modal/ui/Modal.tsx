import React, {JSX} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import Portal from 'widgets/Portal';
import Overlay from 'widgets/Overlay';
import useModal from 'shared/lib/hooks/useModal/useModal';
import {useTheme} from 'app/providers/ThemeProvider';

interface IModalProps {
    className?: string,
    children?: React.ReactNode,
    isOpen?: boolean,
    onClose?: () => void,
    lazy?: boolean;
}

const ANIMATION_DELAY: number = 300;

const Modal: React.FC<IModalProps> = (props: IModalProps): JSX.Element | null => {
    const {className, children, isOpen, onClose, lazy} = props;

    const {onCloseHandler, isClosing, isMounted} = useModal({onClose, isOpen, animationDelay: ANIMATION_DELAY});

    const mods: Record<string, boolean | undefined> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    const {theme} = useTheme();

    if (lazy && !isMounted) {
        return null;
    }

    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [className, theme, 'app_modal'])}>
                <Overlay onClick={onCloseHandler}/>
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};

export default Modal;


