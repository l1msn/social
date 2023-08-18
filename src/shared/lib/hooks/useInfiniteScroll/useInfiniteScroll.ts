import React, { useEffect } from 'react';

interface IUseInfiniteScrollOptions {
    callback?: () => void;
    triggerRef: React.MutableRefObject<HTMLElement>;
    wrapperRef: React.MutableRefObject<HTMLElement>;
}

function useInfiniteScroll({
    callback,
    triggerRef,
    wrapperRef,
}: IUseInfiniteScrollOptions) {
    useEffect(() => {
        const wrapperElementCurrent = wrapperRef.current;
        const triggerElementCurrent = triggerRef.current;
        let observer: IntersectionObserver | null = null;
        if (callback) {
            const options = {
                root: wrapperElementCurrent,
                rootMargin: '0px',
                threshold: 1.0,
            };
            observer = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    callback();
                }
            }, options);

            observer.observe(triggerElementCurrent);

            return () => {
                if (observer && triggerElementCurrent) {
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    observer.unobserve(triggerElementCurrent);
                }
            };
        }
    }, [callback, triggerRef, wrapperRef]);
}

export default useInfiniteScroll;
