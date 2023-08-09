import {IStateSchema} from '@/app/providers/StoreProvider';

const getProfileAvatar = (state: IStateSchema) => state?.profile?.data?.avatar || '';

export default getProfileAvatar;
