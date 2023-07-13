import {IThunkExtraArg} from 'app/providers/StoreProvider';

interface IThunkConfig<T> {
    rejectValue: T,
    extra: IThunkExtraArg
}

export default IThunkConfig;
