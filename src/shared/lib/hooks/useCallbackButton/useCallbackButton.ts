import { useCallback, useEffect } from 'react';

function useCallbackButton(callback: (...args: any[]) => any, key: string) {
    const callbackWithButton = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === key) {
                callback();
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
