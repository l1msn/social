import {Action, CombinedState, configureStore, Reducer, ReducersMapObject, ThunkDispatch} from '@reduxjs/toolkit';
import IStateSchema from '../types/IStateSchema';
import {userReducer} from 'entities/User';
import {createReducerManager} from 'app/providers/StoreProvider/config/reducerManager';
import {useDispatch} from 'react-redux';
import $api from 'shared/api/api';
import {NavigateOptions, To} from 'react-router-dom';
import {profileReducer} from 'entities/Profile/model/slice/profileSlice';
import {ReducersList} from 'shared/lib/components/DynamicModuleLoader';

function createReduxStore(initialState?: IStateSchema,
    asyncReducers?: ReducersMapObject<IStateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void) {
    const rootReducers: ReducersList = {
        ...asyncReducers,
        user: userReducer,
        profile: profileReducer,
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
                    navigate,
                },
            },
        }),
    });


    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

const store = createReduxStore();
const useAppThunkDispatch = () => useDispatch<ThunkAppDispatch>();

type RootState = ReturnType<typeof store.getState>
type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']
type ThunkAppDispatch = ThunkDispatch<RootState, void, Action>;

export default createReduxStore;
export type {RootState, AppDispatch};
