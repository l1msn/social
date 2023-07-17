import {IStateSchema} from 'app/providers/StoreProvider';
import {IProfile} from 'entities/Profile/model/types/IProfile';


const getProfileForm = (state: IStateSchema) => state?.profile?.form || {} as IProfile;

export default getProfileForm;
