import {configureStore, ReducersMapObject} from '@reduxjs/toolkit';
import IStateSchema from './IStateSchema';
import {counterReducer} from 'entities/Counter';
import {userReducer} from 'entities/User';
import {loginReducer} from 'features/AuthByUsername';

function createReduxStore(initialState?: IStateSchema) {
    const rootReducers: ReducersMapObject<IStateSchema> = {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
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
