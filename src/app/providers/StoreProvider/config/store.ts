import {configureStore, ReducersMapObject} from '@reduxjs/toolkit';
import {IStateSchema} from 'app/providers/StoreProvider/config/StateSchema';
import {counterReducer} from 'entities/Counter';
import {userReducer} from 'entities/User';

function createReduxStore(initialState?: IStateSchema) {
    const rootReducers: ReducersMapObject<IStateSchema> = {
        counter: counterReducer,
        user: userReducer,
    };

    return configureStore<IStateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}

const store = createReduxStore();

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export default createReduxStore;
export type {RootState, AppDispatch};
