import {IStateSchema} from 'app/providers/StoreProvider';

const getScrollPosition = (state: IStateSchema) => state.scrollRestore.scroll;

export default getScrollPosition;
