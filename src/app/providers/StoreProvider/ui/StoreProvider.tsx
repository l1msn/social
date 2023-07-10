import React, {JSX} from 'react';
import {Provider} from 'react-redux';
import IStateSchema from '../types/IStateSchema';
import {createReduxStore} from 'app/providers/StoreProvider';
import {DeepPartial, ReducersMapObject} from '@reduxjs/toolkit';

interface IStoreProviderProps {
    children?: React.ReactNode,
    initialState?: DeepPartial<IStateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<IStateSchema>>;
}

const StoreProvider: React.FC<IStoreProviderProps> = ({children, initialState, asyncReducers}: IStoreProviderProps): JSX.Element => {
    const store = createReduxStore(initialState as IStateSchema,
        asyncReducers as ReducersMapObject<IStateSchema>);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;


