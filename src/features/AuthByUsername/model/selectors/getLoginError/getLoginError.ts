import {IStateSchema} from 'app/providers/StoreProvider';

const getLoginError = (state: IStateSchema) => state?.loginForm?.error || '';

export default getLoginError;
