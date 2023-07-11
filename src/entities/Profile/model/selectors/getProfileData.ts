import {IStateSchema} from 'app/providers/StoreProvider';


const getProfileData = (state: IStateSchema) => state.profile.data;

export default getProfileData;
