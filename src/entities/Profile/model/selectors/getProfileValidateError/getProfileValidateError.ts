import {IStateSchema} from 'app/providers/StoreProvider';
import {ValidateProfileError} from 'entities/Profile/model/types/IProfile';


const getProfileValidateError = (state: IStateSchema) => state?.profile?.validateError || [] as ValidateProfileError[];

export default getProfileValidateError;