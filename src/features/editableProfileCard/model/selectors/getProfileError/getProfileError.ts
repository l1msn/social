import {IStateSchema} from '@/app/providers/StoreProvider';

const getProfileError = (state: IStateSchema) => state?.profile?.error || '';

export default getProfileError;
