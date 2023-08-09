import {IStateSchema} from '@/app/providers/StoreProvider';

const getLoginIsLoading = (state: IStateSchema) => state?.loginForm?.isLoading || false;

export default getLoginIsLoading;
