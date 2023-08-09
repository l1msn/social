import {IStateSchema} from '@/app/providers/StoreProvider';

const getLoginState = (state: IStateSchema) => state?.loginForm;

export default getLoginState;
