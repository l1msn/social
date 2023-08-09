import {EnhancedStore} from '@reduxjs/toolkit';
import {IStateSchema} from '@/app/providers/StoreProvider';
import {IReducerManager} from '../config/reducerManager';

interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
    reducerManager: IReducerManager;
}

export default IReduxStoreWithManager;
