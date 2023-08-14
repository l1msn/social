import {createContext, useContext, useEffect, useMemo, useRef, useState} from 'react';

type SpringType = typeof import('@react-spring/web');
type GestureType = typeof import('@use-gesture/react');

interface IAnimationContextPayload {
    Gesture?: GestureType,
    Spring?: SpringType,
    isLoaded?: boolean;
}

interface IAnimationProviderProps {
    children: React.ReactNode;
}

const AnimationContext = createContext<IAnimationContextPayload>({});

function getAsyncAnimationModules() {
    return Promise.all([
        import('@react-spring/web'),
        import('@use-gesture/react'),
    ]);
}

const AnimationProvider: React.FC<IAnimationProviderProps> = ({children}: IAnimationProviderProps) => {
    const SpringRef = useRef<SpringType>();
    const GestureRef = useRef<GestureType>();
    const [isLoaded, setIsLoaded] = useState<boolean>(false);

    useEffect(() => {
        getAsyncAnimationModules().then(([Spring, Gesture]) => {
            SpringRef.current = Spring;
            GestureRef.current = Gesture;
            setIsLoaded((prevState) => !prevState);
        });
    }, []);

    const value = useMemo(() => ({
        Gesture: GestureRef.current,
        Spring: SpringRef.current,
        isLoaded,
    }), [isLoaded]);

    return (
        <AnimationContext.Provider value={value}>
            {children}
        </AnimationContext.Provider>
    );
};

function useAnimationLibs() {
    return useContext(AnimationContext) as Required<IAnimationContextPayload>;
}

export {useAnimationLibs, AnimationProvider};
