import {IStateSchema} from 'app/providers/StoreProvider';
import {IProfile} from '../../types/IProfile';


const getProfileData = (state: IStateSchema) => state?.profile?.data || {} as IProfile;

export default getProfileData;
