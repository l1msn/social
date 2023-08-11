import {MutableRefObject, useCallback, useEffect, useRef, useState} from 'react';
import {clsModal} from '@/widgets/Modal';

interface IUseModalProps {
    onClose?: () => void;
    isOpen?: boolean,
    animationDelay?: number;
}

function useModal(props: IUseModalProps) {
    const {isOpen, animationDelay, onClose} = props;
    const [isMounted, setIsMounted] = useState<boolean>(false);
    const [isClosing, setIsClosing] = useState<boolean>(false);
    const timerRef = useRef() as MutableRefObject<ReturnType<typeof setTimeout>>;

    const mods: Record<string, boolean | undefined> = {
        [clsModal.opened]: isOpen,
        [clsModal.isClosing]: isClosing,
    };

    const onCloseHandler =
        useCallback(() => {
            if (onClose) {
                setIsClosing(true);
                timerRef.current = setTimeout(() => {
                    onClose();
                    setIsClosing(false);
                }, animationDelay);
            }
        }, [animationDelay, onClose]);


    const onKeyDown =
        useCallback((e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onCloseHandler();
            }
        }, [onCloseHandler]);


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

    return {isClosing, onCloseHandler, isMounted};
}

export default useModal;
