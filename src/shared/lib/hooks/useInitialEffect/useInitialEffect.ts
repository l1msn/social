import {useEffect} from 'react';

function useInitialEffect(callback: () => void) {
    useEffect(() => {
        if (__PROJECT__ !== 'storybook' && __PROJECT__ !== 'jest' ) {
            callback();
        }
        // eslint-disable-next-line
    }, []);
}

export default useInitialEffect;
