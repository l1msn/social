import { IStateSchema } from '@/app/providers/StoreProvider';
import { ReducersList } from '../../../components/DynamicModuleLoader/DynamicModuleLoader';
import Themes from '@/shared/consts/theme';

interface IComponentRenderOptions {
    route?: string;
    initialState?: DeepPartial<IStateSchema>;
    asyncReducers?: ReducersList;
    theme?: Themes;
}

export default IComponentRenderOptions;
