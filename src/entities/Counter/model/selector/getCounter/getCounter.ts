import {IStateSchema} from 'app/providers/StoreProvider';


function getCounter(state: IStateSchema) {
    return state.counter;
}

export default getCounter;
