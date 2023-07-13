import React, {JSX, MutableRefObject, useCallback, useEffect, useRef, useState} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import {useTheme} from 'app/providers/ThemeProvider';
import Portal from 'widgets/Portal';

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

    const [isMounted, setIsMounted] = useState<boolean>(false);
    const [isClosing, setIsClosing] = useState<boolean>(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    const mods: Record<string, boolean | undefined> = {
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
        isOpen && setIsMounted(true);
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    if (lazy && !isMounted) {
        return null;
    }

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


