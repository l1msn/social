import React, { useEffect, useRef } from 'react';

interface IUseInfiniteScrollOptions {
    callback?: () => void;
    triggerRef: React.MutableRefObject<HTMLElement>;
    wrapperRef?: React.MutableRefObject<HTMLElement>;
}

function useInfiniteScroll({
    callback,
    triggerRef,
    wrapperRef,
}: IUseInfiniteScrollOptions) {
    const observer = useRef<IntersectionObserver | null>(null);
    useEffect(() => {
        const wrapperElementCurrent = wrapperRef?.current || null;
        const triggerElementCurrent = triggerRef.current;
        if (callback) {
            const options = {
                root: wrapperElementCurrent,
                rootMargin: '0px',
                threshold: 1.0,
            };
            observer.current = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.current.observe(triggerElementCurrent);

            return () => {
                if (observer.current && triggerElementCurrent) {
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    observer.current.unobserve(triggerElementCurrent);
                }
            };
        }
    }, [callback, triggerRef, wrapperRef]);
}

export default useInfiniteScroll;
