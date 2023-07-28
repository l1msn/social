import React, {JSX, MutableRefObject, useRef} from 'react';
import classNames from 'shared/lib/classNames/classNames';
import cls from './Page.module.scss';
import useInfiniteScroll from 'shared/lib/hooks/useInfiniteScroll/useInfiniteScroll';

interface IPageProps {
    className?: string
    children: React.ReactNode,
    onScrollEnd?: () => void;
}

const Page: React.FC<IPageProps> = ({className, children, onScrollEnd}: IPageProps): JSX.Element => {
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfiniteScroll({
        triggerRef: triggerRef,
        wrapperRef: wrapperRef,
        callback: onScrollEnd,
    });

    return (
        <section ref={wrapperRef} className={classNames(cls.page, {}, [className])}>
            {children}
            <div ref={triggerRef}/>
        </section>
    );
};

export default Page;


