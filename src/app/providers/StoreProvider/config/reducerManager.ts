import {AnyAction, CombinedState, combineReducers, Reducer, ReducersMapObject} from '@reduxjs/toolkit';
import IStateSchema from '../types/IStateSchema';

type StateSchemaKey = keyof IStateSchema;
type MountedReducers = OptionalRecord<StateSchemaKey, boolean>;

interface IReducerManager {
    getReducerMap: () => ReducersMapObject<IStateSchema>,
    reduce: (state: IStateSchema, action: AnyAction) => CombinedState<IStateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    getMountedReducers: () => MountedReducers;
}

function createReducerManager(initialReducers: ReducersMapObject<IStateSchema>): IReducerManager {
    const reducers = {...initialReducers};

    let combinedReducer = combineReducers(reducers);

    let keysToRemove: Array<StateSchemaKey> = [];

    const mountedReducers: MountedReducers = {};

    return {
        getReducerMap: () => reducers,
        getMountedReducers: () => mountedReducers,
        reduce: (state: IStateSchema, action: AnyAction) => {
            if (keysToRemove.length > 0) {
                state = {...state};
                keysToRemove.forEach((key) => {
                    delete state[key];
                });
                keysToRemove = [];
            }
            return combinedReducer(state, action);
        },
        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }
            reducers[key] = reducer;
            mountedReducers[key] = true;
            combinedReducer = combineReducers(reducers);
        },
        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return;
            }
            delete reducers[key];
            keysToRemove.push(key);
            mountedReducers[key] = false;
            combinedReducer = combineReducers(reducers);
        },
    };
}

export {createReducerManager};
export type {IReducerManager, StateSchemaKey, MountedReducers};
