import {configureStore} from '@reduxjs/toolkit';
import {IStateSchema} from 'app/providers/StoreProvider/config/StateSchema';
import {counterReducer} from 'entities/Counter';

function createReduxStore(initialState?: IStateSchema) {
    return configureStore<IStateSchema>({
        reducer: {counter: counterReducer},
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}

const store = createReduxStore();

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export default createReduxStore;
export type {RootState, AppDispatch};
