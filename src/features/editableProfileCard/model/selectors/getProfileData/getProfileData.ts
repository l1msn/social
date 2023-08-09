import {IStateSchema} from '@/app/providers/StoreProvider';
import {IProfile} from '@/entities/Profile';

const getProfileData = (state: IStateSchema) => state?.profile?.data || {} as IProfile;

export default getProfileData;
