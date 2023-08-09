import {IStateSchema} from '@/app/providers/StoreProvider';

const getLoginPassword = (state: IStateSchema) => state?.loginForm?.password || '';

export default getLoginPassword;
