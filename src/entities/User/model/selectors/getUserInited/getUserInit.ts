import {IStateSchema} from 'app/providers/StoreProvider';


const getUserInit = (state: IStateSchema) => state.user.init;

export default getUserInit;
