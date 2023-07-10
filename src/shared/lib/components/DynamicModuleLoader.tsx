import React, {JSX, useEffect} from 'react';
import {useDispatch, useStore} from 'react-redux';
import {IReduxStoreWithManager} from 'app/providers/StoreProvider';
import {StateSchemaKey} from 'app/providers/StoreProvider/config/reducerManager';
import {Reducer} from '@reduxjs/toolkit';

type ReducersList = {
    [name in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer];

interface IDynamicModuleLoaderProps {
    children?: React.ReactNode,
    reducers?: ReducersList,
    removeAfterAmount?: boolean;
}

const DynamicModuleLoader: React.FC<IDynamicModuleLoaderProps> = (props): JSX.Element => {
    const {children, removeAfterAmount, reducers} = props;

    const dispatch = useDispatch();

    const store = useStore() as IReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
            store.reducerManager.add(name, reducer);
            dispatch({type: `@INIT ${name} reducer`});
        });

        return () => {
            if (removeAfterAmount) {
                Object.entries(reducers).forEach(([name, reducer]: ReducersListEntry) => {
                    store.reducerManager.remove(name);
                    dispatch({type: `@DESTROY ${name} reducer`});
                });
            }
        };
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {children}
        </>
    );
};

export {DynamicModuleLoader, ReducersList};


