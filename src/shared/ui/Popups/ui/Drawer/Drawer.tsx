import React, {JSX, useCallback, useEffect} from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './Drawer.module.scss';
import useTheme from '@/shared/lib/hooks/useTheme/useTheme';
import {AnimationProvider, useAnimationLibs} from '@/shared/lib/components/AnimationProvider/AnimationProvider';
import Portal from '../../../Portal';
import Overlay from '../../../Overlay';
import Loader from '../../../Loader';

interface IDrawerProps {
    className?: string,
    children?: React.ReactNode,
    isOpen?: boolean,
    onClose?: () => void,
    lazy?: boolean;
}

const height = window.innerHeight - 100;

const DrawerContent: React.FC<IDrawerProps> = (props: IDrawerProps): JSX.Element | null => {
    const {Spring, Gesture} = useAnimationLibs();
    const {className,
        children,
        isOpen,
        onClose,
        lazy,
    } = props;

    const [{y}, api] = Spring.useSpring(() => ({y: height}));

    const openDrawer = useCallback(() => {
        api.start({y: 0, immediate: false});
    }, [api]);

    function close(velocity: number = 0) {
        api.start({
            y: height,
            immediate: false,
            config: {
                ...Spring.config.stiff,
                velocity,
            },
            onResolve: onClose,
        });
    }

    const bind = Gesture.useDrag(
        ({
            last,
            velocity: [, vy],
            direction: [, dy],
            movement: [, my],
            cancel,
        }) => {
            if (my < -70) cancel();

            if (last) {
                if (my > height * 0.5 || (vy > 0.5 && dy > 0)) {
                    close();
                } else {
                    openDrawer();
                }
            } else {
                api.start({y: my, immediate: true});
            }
        }, {
            from: () => [0, y.get()], filterTaps: true, bounds: {top: 0}, rubberband: true,
        },
    );

    useEffect(() => {
        if (isOpen) {
            openDrawer();
        }
    }, [api, isOpen, openDrawer]);

    if (!isOpen) {
        return null;
    }

    const {theme} = useTheme();

    const display = y.to((py) => (py < height ? 'block' : 'none'));

    return (
        <Portal>
            <div className={classNames(cls.Drawer, {}, [className, theme, 'app_drawer'])}>
                <Overlay onClick={close}/>
                <Spring.a.div
                    className={cls.sheet}
                    style={{display, bottom: `calc(-100vh + ${height - 100}px)`, y}}
                    {...bind()}
                >
                    {children}
                </Spring.a.div>
            </div>
        </Portal>
    );
};

const DrawerAsync: React.FC<IDrawerProps> = (props: IDrawerProps): JSX.Element => {
    const {isLoaded} = useAnimationLibs();

    if (!isLoaded) {
        return <Loader/>;
    }

    return <DrawerContent {...props}/>;
};

const Drawer: React.FC<IDrawerProps> = (props: IDrawerProps): JSX.Element => {
    return (
        <AnimationProvider>
            <DrawerAsync {...props}/>
        </AnimationProvider>
    );
};

export default Drawer;


