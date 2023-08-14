import {IStateSchema} from '@/app/providers/StoreProvider';
import {useSelector} from 'react-redux';

type Selector<T> = (state: IStateSchema) => T;
type Result<T> = [() => T, Selector<T>]

function buildSelector<T>(selector: Selector<T>): Result<T> {
    const useSelectorHook = () => {
        return useSelector(selector);
    };

    return [useSelectorHook, selector];
}

export default buildSelector;
