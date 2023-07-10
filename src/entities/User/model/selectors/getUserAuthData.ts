import {IStateSchema} from 'app/providers/StoreProvider';


const getUserAuthData = (state: IStateSchema) => state.user.authData;

export default getUserAuthData;
