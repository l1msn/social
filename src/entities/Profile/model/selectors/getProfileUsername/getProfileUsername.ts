import {IStateSchema} from 'app/providers/StoreProvider';


const getProfileUsername = (state: IStateSchema) => state?.profile?.data?.username || '';

export default getProfileUsername;
