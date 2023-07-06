import React, {JSX, useCallback, useEffect, useRef, useState} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import {useTheme} from 'app/providers/ThemeProvider';
import Portal from 'widgets/Portal';

interface IModalProps {
    className?: string,
    children?: React.ReactNode,
    isOpen?: boolean,
    onClose?: () => void;
}

const ANIMATION_DELAY: number = 300;

const Modal: React.FC<IModalProps> = ({className, children, isOpen, onClose}: IModalProps): JSX.Element => {
    const [isClosing, setIsClosing] = useState<boolean>(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    const {theme} = useTheme();

    function onContentClick(e: React.MouseEvent) {
        e.stopPropagation();
    }

    const closeHandler =
        useCallback(() => {
            if (onClose) {
                setIsClosing(true);
                timerRef.current = setTimeout(() => {
                    onClose();
                    setIsClosing(false);
                }, ANIMATION_DELAY);
            }
        }, [onClose]);


    const onKeyDown =
        useCallback((e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                closeHandler();
            }
        }, [closeHandler]);


    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [className, theme, 'app_modal'])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};

export default Modal;


