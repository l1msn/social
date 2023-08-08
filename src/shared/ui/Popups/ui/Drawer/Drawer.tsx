import React, {JSX} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Drawer.module.scss';
import {useTheme} from 'app/providers/ThemeProvider';
import Portal from 'widgets/Portal';
import Overlay from 'widgets/Overlay';
import useModal from 'shared/lib/hooks/useModal/useModal';

interface IDrawerProps {
    className?: string,
    children: React.ReactNode,
    isOpen?: boolean,
    onClose?: () => void,
    lazy?: boolean;
}

const Drawer: React.FC<IDrawerProps> = (props: IDrawerProps): JSX.Element | null => {
    const {className,
        children,
        isOpen,
        onClose,
        lazy,
    } = props;

    const {onCloseHandler, isClosing, isMounted} = useModal({onClose, isOpen, animationDelay: 300});

    const mods: Record<string, boolean | undefined> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) {
        return null;
    }

    const {theme} = useTheme();

    return (
        <Portal>
            <div className={classNames(cls.drawer, mods, [className, theme, 'app_drawer'])}>
                <Overlay onClick={onCloseHandler}/>
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};

export default Drawer;


