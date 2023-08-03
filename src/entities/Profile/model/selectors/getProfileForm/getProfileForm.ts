import {IStateSchema} from 'app/providers/StoreProvider';
import {IProfile} from '../../types/IProfile';


const getProfileForm = (state: IStateSchema) => state?.profile?.form || {} as IProfile;

export default getProfileForm;
