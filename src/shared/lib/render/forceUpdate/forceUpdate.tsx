import { createContext, useContext, useMemo, useState } from 'react';

const ForceUpdateContext = createContext({
    value: true,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    forceUpdate: () => {},
});

function useUpdate() {
    const { forceUpdate } = useContext(ForceUpdateContext);

    return forceUpdate;
}

function ForceUpdateProvider({ children }: { children: React.ReactNode }) {
    const [value, setValue] = useState<boolean>(true);

    function forceUpdate() {
        setValue((prevState) => !prevState);
        setTimeout(() => {
            setValue((prevState) => !prevState);
        }, 0);
    }

    const valueContext = useMemo(() => {
        return { value, forceUpdate };
    }, [value]);

    if (!value) {
        return null;
    }

    return (
        <ForceUpdateContext.Provider value={valueContext}>
            {children}
        </ForceUpdateContext.Provider>
    );
}

export { useUpdate, ForceUpdateProvider };
