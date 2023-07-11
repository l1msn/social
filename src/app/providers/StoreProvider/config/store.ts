import {configureStore, DeepPartial, ReducersMapObject} from '@reduxjs/toolkit';
import IStateSchema from '../types/IStateSchema';
import {counterReducer} from 'entities/Counter';
import {userReducer} from 'entities/User';
import {createReducerManager} from 'app/providers/StoreProvider/config/reducerManager';
import {useDispatch} from 'react-redux';

function createReduxStore(initialState?: IStateSchema,
    asyncReducers?: ReducersMapObject<IStateSchema>) {
    const rootReducers: ReducersMapObject<IStateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    };

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore<IStateSchema>({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });


    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

const store = createReduxStore();

type RootState = ReturnType<typeof store.getState>
type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

export default createReduxStore;
export type {RootState, AppDispatch};
