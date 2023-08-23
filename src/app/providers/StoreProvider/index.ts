import IStateSchema from './types/IStateSchema';
import createReduxStore from './config/store';
import StoreProvider from './ui/StoreProvider';
import IReduxStoreWithManager from './types/IReduxStoreWithManager';
import IThunkExtraArg from './types/IThunkExtraArg';
import IThunkConfig from './types/IThunkConfig';
import { StateSchemaKey } from './config/reducerManager';

export { StoreProvider, createReduxStore };
export type {
    IStateSchema,
    IReduxStoreWithManager,
    IThunkExtraArg,
    IThunkConfig,
    StateSchemaKey,
};
