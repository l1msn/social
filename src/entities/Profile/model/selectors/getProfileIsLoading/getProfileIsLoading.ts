import {IStateSchema} from 'app/providers/StoreProvider';


const getProfileIsLoading = (state: IStateSchema) => state?.profile?.isLoading || false;

export default getProfileIsLoading;
