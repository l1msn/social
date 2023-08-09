import {CombinedState, configureStore, Reducer, ReducersMapObject} from '@reduxjs/toolkit';
import IStateSchema from '../types/IStateSchema';
import {userReducer} from '@/entities/User';
import {createReducerManager} from './reducerManager';
import $api from '@/shared/api/api';
import {scrollRestoreReducer} from '@/features/scrollRestore';
import rtkApi from '@/shared/api/rtkApi';


function createReduxStore(initialState?: IStateSchema,
    asyncReducers?: ReducersMapObject<IStateSchema>) {
    const rootReducers: ReducersMapObject<IStateSchema> = {
        ...asyncReducers,
        [rtkApi.reducerPath]: rtkApi.reducer,
        user: userReducer,
        scrollRestore: scrollRestoreReducer,
    };

    const reducerManager = createReducerManager(rootReducers);


    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<IStateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                },
            },
        }).concat(rtkApi.middleware),
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
