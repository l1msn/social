import { useCallback, useEffect } from 'react';

function useCallbackButton(callback: (...args: any[]) => any, key: string) {
    const callbackWithButton = useCallback(
        (e: KeyboardEvent, ...args: any[]) => {
            if (e.key === key) {
                callback(...args);
            }
        },
        [callback, key],
    );

    useEffect(() => {
        window.addEventListener('keydown', callbackWithButton);

        return () => {
            window.removeEventListener('keydown', callbackWithButton);
        };
    }, [callbackWithButton]);

    return callbackWithButton;
}

export default useCallbackButton;
