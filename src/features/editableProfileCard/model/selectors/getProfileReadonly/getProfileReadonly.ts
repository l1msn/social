import {IStateSchema} from '@/app/providers/StoreProvider';

const getProfileReadonly = (state: IStateSchema) => state?.profile?.readonly || false;

export default getProfileReadonly;
