import React, { JSX, MutableRefObject, UIEvent, useRef } from 'react';
import classNames from '@/shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import useInfiniteScroll from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';
import useAppDispatch from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useLocation } from 'react-router-dom';
import useInitialEffect from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useSelector } from 'react-redux';
import useThrottle from '@/shared/lib/hooks/useThrottle/useThrottle';
import PAGE_ID from '@/shared/consts/ids';
import { IStateSchema } from '@/app/providers/StoreProvider';
import {
    ScrollPositionSelectors,
    scrollRestoreActions,
} from '@/features/ScrollRestore';
import TestProps from '@/shared/types/tests';

interface IPageProps extends TestProps {
    className?: string;
    children: React.ReactNode;
    onScrollEnd?: () => void;
}

const Page: React.FC<IPageProps> = (props: IPageProps): JSX.Element => {
    const { className, children, onScrollEnd } = props;
    const dispatch = useAppDispatch();

    const { pathname } = useLocation();

    const scrollPosition = useSelector((state: IStateSchema) =>
        ScrollPositionSelectors.getScrollPositionByPath(state, pathname),
    );

    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef: triggerRef,
        wrapperRef: wrapperRef,
        callback: onScrollEnd,
    });

    const onScroll = useThrottle((e: UIEvent<HTMLDivElement>) => {
        dispatch(
            scrollRestoreActions.setScrollPosition({
                position: e.currentTarget.scrollTop,
                path: pathname,
            }),
        );
    }, 500);

    useInitialEffect(() => {
        wrapperRef.current.scrollTop = scrollPosition;
    });

    return (
        <main
            onScroll={onScroll}
            ref={wrapperRef}
            className={classNames(cls.page, {}, [className])}
            id={PAGE_ID}
            data-testid={props['data-testid'] ?? 'Page'}
        >
            {children}
            {onScrollEnd ? (
                <div className={cls.trigger} ref={triggerRef} />
            ) : null}
        </main>
    );
};

export default Page;
