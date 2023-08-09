import {IStateSchema} from '@/app/providers/StoreProvider';

const getLoginUsername = (state: IStateSchema) => state?.loginForm?.username || '';

export default getLoginUsername;
