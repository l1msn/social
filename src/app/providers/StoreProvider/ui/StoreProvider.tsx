import React, {JSX} from 'react';
import {Provider} from 'react-redux';
import {IStateSchema} from '../config/StateSchema';
import {createReduxStore} from 'app/providers/StoreProvider';
import {DeepPartial} from '@reduxjs/toolkit';

interface IStoreProviderProps {
    children?: React.ReactNode,
    initialState?: DeepPartial<IStateSchema>
}

const StoreProvider: React.FC<IStoreProviderProps> = ({children, initialState}: IStoreProviderProps): JSX.Element => {
    const store = createReduxStore(initialState as IStateSchema);

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default StoreProvider;


