import {IStateSchema, IThunkExtraArg} from 'app/providers/StoreProvider';

interface IThunkConfig<T> {
    state: IStateSchema,
    rejectValue: T,
    extra: IThunkExtraArg
}

export default IThunkConfig;
