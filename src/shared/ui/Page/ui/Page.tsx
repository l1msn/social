import React, {JSX, MutableRefObject, UIEvent, useRef} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import useInfiniteScroll from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import useAppDispatch from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {getScrollPositionByPath, scrollRestoreActions} from 'features/scrollRestore';
import {useLocation} from 'react-router-dom';
import useInitialEffect from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {useSelector} from 'react-redux';
import {IStateSchema} from 'app/providers/StoreProvider';
import useThrottle from 'shared/lib/hooks/useThrottle/useThrottle';

interface IPageProps {
    className?: string
    children: React.ReactNode,
    onScrollEnd?: () => void;
}

const Page: React.FC<IPageProps> = ({className, children, onScrollEnd}: IPageProps): JSX.Element => {
    const dispatch = useAppDispatch();

    const {pathname} = useLocation();

    const scrollPosition = useSelector((state: IStateSchema) =>
        getScrollPositionByPath(state, pathname),
    );

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef: triggerRef,
        wrapperRef: wrapperRef,
        callback: onScrollEnd,
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(scrollRestoreActions.setScrollPosition({
            position: e.currentTarget.scrollTop,
            path: pathname,
        }));
    }, 500);

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    return (
        <section onScroll={onScroll} ref={wrapperRef} className={classNames(cls.page, {}, [className])}>
            {children}
            {onScrollEnd ? <div className={cls.trigger} ref={triggerRef}/> : null}
        </section>
    );
};

export default Page;


